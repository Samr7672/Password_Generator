# Password Generator Flowchart

```mermaid
flowchart TD
    A[Open App] --> B[Render Main Component]
    B --> C[Initialize States]
    C --> D[Display Current Password]
    D --> E[Show Range Input]
    D --> F[Show Number Checkbox]
    D --> G[Show Symbol Checkbox]

    E --> H[User Changes Length]
    F --> I[User Toggles Number]
    G --> J[User Toggles Symbol]

    H --> K[Update length state]
    I --> L[Update usesNumber state]
    J --> M[Update usesSymbol state]

    K --> N[Run password generator]
    L --> N
    M --> N

    N --> O[Build character set]
    O --> P[Randomly choose characters]
    P --> Q[Update password state]
    Q --> D
```

## How the flow works

1. The app loads and renders the main component.
2. The current password and controls are shown.
3. When the user changes a setting, React updates the matching state.
4. The password generator runs again.
5. A new password is generated and displayed.
