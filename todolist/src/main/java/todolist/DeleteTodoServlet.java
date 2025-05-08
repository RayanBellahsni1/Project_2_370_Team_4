package todolist;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class DeleteTodoServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String todoId = request.getParameter("todoId");
        // Delete the to-do item from the list (in-memory or database)
        response.sendRedirect("list");
    }
}
