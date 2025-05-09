<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>To-Do List</title>
</head>
<body>
    <h1>To-Do List</h1>
    <form action="add" method="post">
        <input type="text" name="todo" placeholder="New to-do item">
        <button type="submit">Add</button>
    </form>
    <ul>
        <c:forEach var="todo" items="${todos}">
            <li>${todo} <form action="delete" method="post" style="display:inline;"><input type="hidden" name="todoId" value="${todo}"><button type="submit">Delete</button></form></li>
        </c:forEach>
    </ul>
</body>
</html>
