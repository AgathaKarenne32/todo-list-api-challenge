## 🧪 Testando a API

### No Windows (PowerShell)
```powershell
# Exemplo de listagem de tarefas
$headers = @{ Authorization = "Bearer SEU_TOKEN_AQUI" }
Invoke-RestMethod -Method Get -Uri "http://localhost:3030/tasks" -Headers $headers

![alt text](<Captura de tela 2026-04-19 175904.png>)
![alt text](<Captura de tela 2026-04-19 175954.png>)