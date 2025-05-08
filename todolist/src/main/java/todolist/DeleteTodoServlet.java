package todolist;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DeleteTodoServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String todoId = request.getParameter("todoId");
        if (todoId != null && !todoId.isEmpty()) {
            // Delete the to-do item from the list (in-memory or database)
        }
        response.sendRedirect("list");
    }
}
