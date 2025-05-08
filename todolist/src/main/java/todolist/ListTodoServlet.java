package todolist;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.*;
import javax.servlet.http.*;

public class ListTodoServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve the list of to-do items (from in-memory or database)
        List<String> todos = fetchTodos();
        request.setAttribute("todos", todos);
        RequestDispatcher dispatcher = request.getRequestDispatcher("list.jsp");
        dispatcher.forward(request, response);
    }

    private List<String> fetchTodos() {
        List<String> todos = new ArrayList<>();
        todos.add("Buy groceries");
        todos.add("Complete homework");
        todos.add("Call mom");
        return todos;
    }
}
