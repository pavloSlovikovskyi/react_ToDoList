```mermaid
graph TD;
    App["App
    Root component
    Renders layout structure
    Contains title and ToDoList"] 

    ToDoList["ToDoList
    State: todos[]
    Main container managing todo operations"] 

    AddTodoForm["AddTodoForm
    Props: onAddTodo (callback)
    State: newTodoText
    "] 

    ToDoListItem["ToDoListItem
    Props: todo object, onToggleComplete, onRemoveTodo
    Manages completion toggle & deletion"] 

    %% Root level
    App --> ToDoList

    %% ToDoList children
    ToDoList --> AddTodoForm
    ToDoList --> ToDoListItem

    %% AddTodoForm - data flow
    AddTodoForm -.->|"onAddTodo(newTodoText)"| ToDoList

    %% ToDoListItem - data flow
    ToDoListItem -.->|"onToggleComplete()"| ToDoList
    ToDoListItem -.->|"onRemoveTodo(todo.id)"| ToDoList
```

# Explanation

ToDoList: зберігає масив справ todos та керує додаванням, видаленням і відміткою виконання.

AddTodoForm: керує полем введення newTodoText і передає нову справу в ToDoList через onAddTodo.

ToDoListItem: керує локальною подією кліку для завершення справи і видалення; передає виклики до ToDoList.

App: не має стану, служить лише обгорткою і рендерить ToDoList.
