### What's the problem?
client, server 두 저장소를 하나의 저장소에서 관리하고 싶다. 구조는 다음과 같다.

##### 변경 전(두 개의 저장소)
```markdown
// client project
src
...
package.json

// server project
src
...
package.json
```

##### 변경 후(한 개의 저장소)

```markdown
// monorepo project

packages
  client
    src
    ...
    package.json
  server
    src
    ...
    package.json
package.json
```


### How to solve it?
1. monorepo용 저장소를 만든 후 packages 디렉토리, package.json 파일, .gitignore 파일을 생성하고 커밋한다.

```markdown
// command line

mkdir monorepo
cd monorepo
git init
yarn init -y
mkdir packages
git add .
git commit -m "Init monorepo" 
```

```markdown
// package.json

{
  "private": true,
  "name": "your app",
  "workspaces": [
    "packages/*"
  ]
}
```

```markdown
// .gitignore

/node_modules
```

2. client 저장소를 병합한다. merge 과정에서 충돌이 발생할 것이다. 

```markdown
// command line

git clone https://github.com/username/client.git
git fetch client
git merge client/master --allow-unrelated-histories
```

3. client 디렉토리에 있는 .git 파일을 삭제한 후  packages 디렉토리 내로 옮긴다.

4. 루트 디렉토리에서 packages 디렉토리, package.json 파일을 제외하고 모두 삭제한다.

5. client와 server 두 저장소 간 동일한 모듈을 사용 중인 경우, package.json에서 버전을 확인하고, 더 높은 버전으로 똑같이 바꾼다.

6. 변경사항을 stage에 올리고  merge를 끝낸다.

```markdown

// command line
git add .
git merge --continue
```

6. server 저장소도 3과 똑같은 방법으로 진행한다. 그러면 모든 client, server 저장소의 커밋이 유지된 상태로 두 저장소가 합쳐진 것을 확인할 수 있다.

### Reference
- [Creating a monorepo from separate repos (merging repositories)](https://medium.com/@mattmazzola/creating-a-monorepo-from-separate-repos-merging-repositories-f7942885ace6)
- [Yarn Workspaces: Organize Your Project’s Codebase Like A Pro](https://www.smashingmagazine.com/2019/07/yarn-workspaces-organize-project-codebase-pro/#install-all-dependencies-say-hello-yarn-lock)
