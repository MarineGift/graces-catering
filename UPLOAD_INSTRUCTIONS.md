# 📤 GitHub 업로드 가이드

## 🎯 GitHub에 파일 업로드하기

### 1단계: GitHub 저장소 준비
1. **GitHub.com** 로그인
2. **marinegfr/graces-catering** 저장소 접속
3. 저장소가 비어있는지 확인

### 2단계: 파일 업로드 
1. **"Add file"** 버튼 클릭
2. **"Upload files"** 선택
3. **graces-catering-website.zip** 파일을 드래그해서 업로드
4. 또는 **"choose your files"** 클릭해서 zip 파일 선택
5. **"Commit changes"** 버튼 클릭

### 3단계: 압축 해제 및 정리
GitHub에서 ZIP 파일은 자동으로 압축해제되지 않으므로:

1. 개별 폴더들을 하나씩 업로드하거나
2. GitHub Desktop 앱 사용
3. 또는 아래 **개별 파일 업로드** 방법 사용

---

## 📁 개별 파일 업로드 방법

### 중요한 파일들만 먼저 업로드:

**1. 루트 파일들:**
- `package.json`
- `package-lock.json` 
- `tsconfig.json`
- `vite.config.ts`

**2. 폴더 생성 후 파일 업로드:**
- `client/` 폴더 → 모든 React 코드
- `server/` 폴더 → Express 서버 코드  
- `shared/` 폴더 → 공유 스키마
- `docs/` 폴더 → 배포용 빌드 파일
- `.github/workflows/` 폴더 → 자동 배포 설정

**3. 각 폴더에서 "Add file" → "Upload files" 반복**

---

## ⚡ 더 쉬운 방법: GitHub Desktop 사용

1. **GitHub Desktop** 앱 다운로드
2. 계정 로그인
3. **"Clone repository"** → **marinegfr/graces-catering** 선택
4. 로컬 폴더에 Replit 파일들 복사
5. GitHub Desktop에서 **"Commit to main"** 클릭
6. **"Push origin"** 클릭

---

## 🌐 GitHub Pages 설정 (파일 업로드 후)

파일 업로드가 완료되면:

1. **Settings** → **Pages**
2. **Source**: **"Deploy from a branch"**
3. **Branch**: **main**  
4. **Folder**: **docs** (중요!)
5. **Save** 클릭

**결과:** `https://marinegfr.github.io/graces-catering/`에서 사이트 확인 가능

---

어느 방법이 가장 편하실까요? ZIP 파일 업로드, 개별 파일 업로드, 또는 GitHub Desktop 사용 중에서 선택해주세요!