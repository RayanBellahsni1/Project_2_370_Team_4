package todolist;

public class Todo {
    private String id;
    private String text;
    private boolean crossedOut;

    public Todo(String id, String text) {
        this.id = id;
        this.text = text;
        this.crossedOut = false;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isCrossedOut() {
        return crossedOut;
    }

    public void setCrossedOut(boolean crossedOut) {
        this.crossedOut = crossedOut;
    }
}