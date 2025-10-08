# 🚀 Grace's Catering - 배포 가이드

## 📱 안드로이드/iOS 앱 설치 방법

### 사용자용 앱 설치 가이드:

#### 안드로이드 (Chrome):
1. 웹사이트 방문: `https://[your-username].github.io/graces-catering/`
2. Chrome 메뉴 (⋮) → "앱 설치" 또는 "홈 화면에 추가" 선택
3. "설치" 버튼 클릭
4. 앱이 홈 화면에 추가됨 → 일반 앱처럼 사용 가능

#### iPhone/iPad (Safari):
1. 웹사이트 방문: `https://[your-username].github.io/graces-catering/`
2. 하단 공유 버튼 (▢↑) 터치
3. "홈 화면에 추가" 선택
4. "추가" 버튼 터치
5. 앱이 홈 화면에 추가됨 → 일반 앱처럼 사용 가능

### PWA 앱 기능:
- 🔄 오프라인 접근 가능
- 🏠 홈 화면에서 바로 실행
- 📱 전체화면 네이티브 앱 경험
- ⚡ 빠른 로딩 속도
- 🔔 푸시 알림 지원 (향후 추가)

---

## 🌐 GitHub Pages 배포 방법

### 1단계: 저장소 설정
```bash
# 1. 저장소를 GitHub으로 푸시
git init
git add .
git commit -m "Initial commit: Grace's Catering website with PWA"
git branch -M main
git remote add origin https://github.com/[your-username]/graces-catering.git
git push -u origin main
```

### 2단계: GitHub Pages 활성화
1. GitHub 저장소 → **Settings** 탭 이동
2. 좌측 메뉴에서 **Pages** 선택
3. **Source** 섹션에서 **GitHub Actions** 선택
4. 자동으로 배포가 시작됩니다

### 3단계: 자동 배포 확인
- **Actions** 탭에서 배포 진행상황 확인
- 성공하면 `https://[your-username].github.io/graces-catering/`에서 접근 가능
- 매번 main 브랜치에 푸시할 때마다 자동 배포

---

## 🔧 사용자 정의 도메인 설정 (선택사항)

### 사용자 도메인 연결:
```bash
# 1. CNAME 파일 생성
echo "gracescatering.com" > client/public/CNAME

# 2. DNS 설정 (도메인 제공업체에서)
# A Record: @ → 185.199.108.153
# A Record: @ → 185.199.109.153  
# A Record: @ → 185.199.110.153
# A Record: @ → 185.199.111.153
# CNAME Record: www → [your-username].github.io

# 3. GitHub Pages 설정에서 Custom domain 입력
```

---

## 📧 이메일 설정

현재 연락처 폼은 `gracesvilmt@gmail.com`으로 이메일을 전송합니다.

### 프로덕션 이메일 설정:
1. **SMTP 서비스 선택** (예: Gmail, SendGrid, Mailgun)
2. **환경 변수 설정**:
   ```bash
   VITE_EMAIL_SERVICE_ID=your_service_id
   VITE_EMAIL_TEMPLATE_ID=your_template_id  
   VITE_EMAIL_PUBLIC_KEY=your_public_key
   ```
3. **서버 재배포**

---

## 🔧 개발 환경 설정

### 로컬 개발:
```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 브라우저에서 http://localhost:5000 접속
```

### 프로덕션 빌드 테스트:
```bash
# 빌드 실행
npm run build

# 프로덕션 서버 시작  
npm start

# 또는 미리보기
npm run preview
```

---

## 📱 모바일 앱 테스트

### PWA 기능 테스트:
1. **개발자 도구** (F12) 열기
2. **Application** 탭 → **Manifest** 확인
3. **Service Workers** 등록 상태 확인
4. **Lighthouse** 탭에서 PWA 점수 확인

### 모바일 디바이스 테스트:
- Chrome DevTools의 모바일 시뮬레이터 사용
- 실제 안드로이드/iOS 기기에서 테스트
- 설치 프롬프트가 나타나는지 확인

---

## 🚨 문제 해결

### 일반적인 문제들:

#### 1. 앱 설치 버튼이 나타나지 않음:
- HTTPS가 필요 (GitHub Pages는 자동 제공)
- Service Worker가 올바르게 등록되었는지 확인
- Manifest.json 파일이 올바른지 확인

#### 2. 이미지가 로드되지 않음:
- 이미지 파일 경로 확인
- Build 과정에서 에셋이 올바르게 복사되었는지 확인

#### 3. 이메일이 전송되지 않음:
- 환경 변수 설정 확인
- SMTP 서비스 설정 확인
- 네트워크 연결 상태 확인

### GitHub Pages 특정 문제들:

#### 1. 404 오류:
- Repository 이름이 URL과 일치하는지 확인
- Pages 설정이 올바른지 확인

#### 2. CSS/JS 파일 로드 실패:
- base URL 설정 확인
- 상대 경로로 리소스 참조

---

## 🎯 성능 최적화

### 이미지 최적화:
```bash
# 이미지 압축 (온라인 도구 사용 권장)
- TinyPNG.com
- ImageOptim
- Squoosh.app
```

### SEO 최적화:
- Meta 태그가 올바르게 설정되어 있음 ✅
- Open Graph 태그 설정됨 ✅ 
- 사이트맵 XML 생성 (선택사항)

---

## 📞 기술 지원

Grace's Catering 웹사이트 관련 기술적 문제가 있으시면:

1. **GitHub Issues** 섹션에 문제 보고
2. **gracesvilmt@gmail.com**으로 이메일 문의
3. 배포 로그 및 오류 메시지 포함하여 문의

---

**🎉 축하합니다! Grace's Catering이 이제 안드로이드와 iOS에서 앱으로 사용 가능하며, GitHub에서 자동 배포됩니다!**