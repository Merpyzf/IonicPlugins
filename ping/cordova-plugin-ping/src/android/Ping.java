package com.zijin.plugin;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Description: 执行Ping命令的插件
 * Date: 2020/6/22
 *
 * @author wangke
 */
class Ping extends CordovaPlugin {
    private static final String TAG = Ping.class.getSimpleName();

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("getPingInfo".equals(action)) {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    ping(args, callbackContext);
                }
            });
            return true;
        }
        return false;
    }

    private void ping(JSONArray args, CallbackContext callbackContext) {
        if (args != null && args.length() > 0) {
            JSONArray resultList = new JSONArray();
            int length = args.length();
            for (int index = 0; index < length; index++) {
                String query = "";
                String timeout = "";
                String count = "";
                String version = "";
                JSONObject request = new JSONObject();
                JSONObject responseJson = new JSONObject();
                try {
                    JSONObject obj = args.optJSONObject(index);
                    query = obj.optString("query");
                    timeout = obj.optString("timeout");
                    count = obj.optString("retry");
                    version = obj.optString("version");
                    request.put("query", query);
                    request.put("timeout", timeout);
                    request.put("retry", count);
                    request.put("version", version);
                    JSONObject result = doPing(query, timeout, count, version);
                    Map<String, String> out = new HashMap<String, String>();
                    out = parse(result, out);
                    JSONObject r = new JSONObject();
                    JSONObject finalResponse = new JSONObject();
                    r.put("target", query);
                    if (Double.parseDouble(out.get("avgRtt")) > 0) {
                        responseJson.put("status", "success");
                        r.put("avgRtt", out.get("avgRtt"));
                        r.put("maxRtt", out.get("maxRtt"));
                        r.put("minRtt", out.get("minRtt"));
                        r.put("pctTransmitted", out.get("pctTransmitted"));
                        r.put("pctReceived", out.get("pctReceived"));
                        r.put("pctLoss", out.get("pctLoss"));
                        responseJson.put("result", r);
                        finalResponse.put("response", responseJson);
                        finalResponse.put("request", request);
                        resultList.put(finalResponse);
                    } else {
                        responseJson.put("status", "timeout");
                        r.put("avgRtt", 0);
                        r.put("maxRtt", 0);
                        r.put("minRtt", 0);
                        r.put("pctTransmitted", out.get("pctTransmitted"));
                        r.put("pctReceived", out.get("pctReceived"));
                        r.put("pctLoss", "100%");
                        responseJson.put("result", r);
                        finalResponse.put("response", responseJson);
                        finalResponse.put("request", request);
                        resultList.put(finalResponse);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            callbackContext.success(resultList);
        } else {
            callbackContext.error("Error: Parameter acquisition error");
        }
    }

    private Map<String, String> parse(JSONObject json, Map<String, String> out) throws JSONException {
        Iterator<String> keys = json.keys();
        while (keys.hasNext()) {
            String key = keys.next();
            String val = null;
            try {
                JSONObject value = json.getJSONObject(key);
                parse(value, out);
            } catch (Exception e) {
                val = json.getString(key);
            }

            if (val != null) {
                out.put(key, val);
            }
        }
        return out;
    }

    private JSONObject doPing(String ip, String timeout, String retry, String version) {
        Log.i(TAG, "doPing");
        Log.i(TAG, ip);
        String inputLine = "";
        String stringLine = "";
        String transmitted = "";
        double avgRtt = 0;
        double minRtt = 0;
        double maxRtt = 0;
        JSONObject r = new JSONObject();
        Runtime runtime = Runtime.getRuntime();
        try {
            Log.i(TAG, version);
            String command = "/system/bin/ping -n ";
            if (version.toLowerCase().equals("v6")) {
                command = "/system/bin/ping6 -n ";
            }
            if (Integer.parseInt(timeout) > 0) {
                command = command + " -W " + timeout;
            }
            if (Integer.parseInt(retry) > 0) {
                command = command + " -c " + retry + " ";
            }
            Log.i(TAG, ">>" + command + ip);
            Process mIpAddrProcess = runtime.exec(command + ip);
            int mExitValue = mIpAddrProcess.waitFor();
            Log.i(TAG, "mExitValue" + mExitValue);
            if (mExitValue == 0) {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(mIpAddrProcess.getInputStream()));
                inputLine = bufferedReader.readLine();
                while ((inputLine != null)) {
                    Log.i(TAG, "Input Line:    " + inputLine);
                    if (inputLine.length() > 0 && inputLine.contains("transmitted")) {
                        transmitted = inputLine;
                    }
                    if (inputLine.length() > 0 && inputLine.contains("avg")) {
                        stringLine = inputLine;
                    }
                    inputLine = bufferedReader.readLine();
                }
                if (stringLine != null) {
                    String afterEqual = stringLine.substring(stringLine.indexOf("=") + 1, stringLine.length()).trim();
                    String[] items = afterEqual.split("/");
                    avgRtt = Double.valueOf(items[1]);
                    minRtt = Double.valueOf(items[0]);
                    maxRtt = Double.valueOf(items[2]);
                    r.put("avgRtt", avgRtt);
                    r.put("minRtt", minRtt);
                    r.put("maxRtt", maxRtt);
                    String s[] = transmitted.trim().split(",");
                    r.put("pctTransmitted", s[0].trim().split(" ")[0]);
                    r.put("pctReceived", s[1].trim().split(" ")[0]);
                    r.put("pctLoss", s[2].trim().split(" ")[0]);
                } else {
                    r.put("avgRtt", 0);
                }
            } else {
                avgRtt = 0;
                r.put("avgRtt", 0);
                r.put("pctTransmitted", retry);
                r.put("pctReceived", 0);
            }
        } catch (InterruptedException ignore) {
            ignore.printStackTrace();
            Log.e(TAG, " Exception:" + ignore);
        } catch (IOException e) {
            e.printStackTrace();
            Log.e(TAG, " Exception:" + e);
        } catch (Exception e) {
            e.printStackTrace();
            Log.e(TAG, " Exception:" + e);
        }
        return r;
    }
}