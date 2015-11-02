<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Test</title>
    <script src="http://apps.bdimg.com/libs/jquery/1.6.4/jquery.js"></script>
</head>
<body>
<div>
    <input type="text" name="name"/>
    <input type="text" age="age"/>
    <button id="click" value="click"/>
</div>
</body>
<script>
    var obj={};
    obj['name']="hxd";
    obj['age']=11;
    $(function () {
        $("#click").click(function () {
            $.ajax({
                type: "POST",
                url: "testInput.action",
                data:obj,

            });
        })
    });
</script>
</html>
