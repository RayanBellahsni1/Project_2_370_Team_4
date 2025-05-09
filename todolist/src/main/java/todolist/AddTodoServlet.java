package todolist;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AddTodoServlet extends HttpServlet {
    
    private static final List<Todo> todos = new ArrayList<>();

    public static List<Todo> getTodos() {
        return todos;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String todoText = request.getParameter("todo");
        if (todoText != null && !todoText.isEmpty()) {
            synchronized (todos) {
                todos.add(new Todo(String.valueOf(todos.size() + 1), todoText));
            }
        }
        response.sendRedirect("list");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        synchronized (todos) {
            request.setAttribute("todos", todos);
        }
        RequestDispatcher dispatcher = request.getRequestDispatcher("list.jsp");
        dispatcher.forward(request, response);
    }
}

