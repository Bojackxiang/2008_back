const date = new Date();

module.exports = {
    "auther":           "weijie xiang",
    "port":             process.env.PORT || "8080",
    "mongoUrl":         "mongodb://root_aisf_2641178338343315:2FJSfJsYA2ykTtLVHhPS5MQysZ4BmxhWGDXN7DKW2f4UAMLXpHeBWtK33uGEaWkJ@localhost:27017/aisf_db",
    "mongodblocal":     "mongodb://localhost:27017/Register",
    "test":             "this is a test for the following line" + date.toString(),
}

