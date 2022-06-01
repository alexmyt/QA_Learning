1. На локальном репозитории сделать ветки для:
- Postman
- Jmeter
- CheckLists
- Bag Reports
- SQL
- Charles
- Mobile testing

'git branch postman' - create new branch with name 'postman'
'git checkout -b jmetter' - create and switch to new branch 'jmetter'
'git branch CheckLists; git branch BugReports; git branch sql; git branch charles; git branch mobileTesting'

2. Запушить все ветки на внешний репозиторий
'git push -u --all origin' - push all branches to remote 'origin', set upstrim for all

3. В ветке Bag Reports сделать текстовый документ со структурой баг репорта
git checkout BugReports

cat > bugReport001.json << EOF
{
  "bugs": [
    {
      "id": 100,
      "summary": "Typos in text",
      "description": "",
      "priority": "Low",
      "severity": "Minor"
    }
  ]
}
EOF

4. Запушить структуру багрепорта на внешний репозиторий
'git add bugReport001.json; git commit -m 'create bug report'; git push'

5. Вмержить ветку Bag Reports в Main
'git checkout master' - not 'Main', becouse default branch named 'master'
'git merge BugReports'

6. Запушить main на внешний репозиторий.
7. В ветке CheckLists набросать структуру чек листа.
8. Запушить структуру на внешний репозиторий
9. На внешнем репозитории сделать Pull Request ветки CheckLists в main
10. Синхронизировать Внешнюю и Локальную ветки Main