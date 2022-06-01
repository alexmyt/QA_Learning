#### 1. На локальном репозитории сделать ветки для:
- Postman
- Jmeter
- CheckLists
- Bag Reports
- SQL
- Charles
- Mobile testing

`git branch postman` - create new branch with name 'postman'.

`git checkout -b jmetter` - create and switch to a new branch 'jmetter'.

`git branch CheckLists; git branch BugReports; git branch sql; git branch charles; git branch mobileTesting` - create many repos.

#### 2. Запушить все ветки на внешний репозиторий

`git push -u --all origin` - push all branches to remote 'origin', set upstrim for all

#### 3. В ветке Bag Reports сделать текстовый документ со структурой баг репорта

```
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
```

#### 4. Запушить структуру багрепорта на внешний репозиторий

`git add bugReport001.json; git commit -m 'create bug report'; git push`

#### 5. Вмержить ветку Bag Reports в Main

`git checkout master` - not 'Main', becouse default branch is named 'master'

`git merge BugReports`

#### 6. Запушить main на внешний репозиторий.

`git push`

#### 7. В ветке CheckLists набросать структуру чек листа.
```
git checkout CheckLists
touch checklist001.txt
cat > checklist001.txt
1. Create System and Acceptance Tests [ ]
2. Start Acceptance Test Creation [ ]
3. Identify Test team [ ]
4. Create Workplan [ ]
5. Create Test Approach [ ]
6. Link Acceptance Criteria and Requirements to form the basis of Acceptance Test [ ]
Ctrl+C
```

#### 8. Запушить структуру на внешний репозиторий

`git add checklist001.txt; git commit -m 'Add check-list'; git push`

#### 9. На внешнем репозитории сделать Pull Request ветки CheckLists в main

`Repo -> Pull requests -> New pull request -> compare:CheckLists -> Create -> Create`

#### 10. Синхронизировать Внешнюю и Локальную ветки Main

`git pull`
