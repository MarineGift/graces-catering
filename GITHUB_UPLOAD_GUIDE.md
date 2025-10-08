# GitHub 업로드 가이드

## 📋 변경 사항 요약

### 추가된 파일들
- **메뉴 이미지**: 15개의 음식 이미지가 `docs/assets/images/menu/` 폴더에 추가됨
  - `appetizers/`: 4개 (Cocktail Shrimp, Crab Cakes, Honey Glazed Cod, Salmon)
  - `dumplings-rolls/`: 2개 (Mandu, Steamed Fried Mandu)
  - `korean-specialties/`: 4개 (Bulgogi, Chicken Wings, Galbi, Korean Style Chicken)
  - `salads/`: 5개 (Chicken Salad, Egg Salad, Garden Salad, Tuna Salad, Fruits & Cheese)

### 수정된 파일
- **docs/index.html**: 메뉴 섹션 추가
  - 네비게이션에 "Menu" 링크 추가
  - 갤러리와 About 섹션 사이에 새로운 메뉴 섹션 삽입
  - 메뉴 필터링 기능 (JavaScript)
  - Footer에 Menu 링크 추가

## 🚀 GitHub에 업로드하는 방법

### 방법 1: Replit Shell 사용 (추천)

1. Replit의 Shell을 엽니다
2. 다음 명령어를 차례로 실행합니다:

```bash
# 현재 변경사항 확인
git status

# 모든 변경사항을 staging
git add docs/

# 커밋 메시지와 함께 커밋
git commit -m "Add menu section with 15 food items and images"

# GitHub에 푸시
git push origin main
```

### 방법 2: GitHub Desktop 사용

1. GitHub Desktop을 엽니다
2. "graces-catering" 저장소를 선택합니다
3. 왼쪽에서 변경된 파일들을 확인합니다
4. 커밋 메시지를 입력합니다: "Add menu section with 15 food items and images"
5. "Commit to main" 버튼을 클릭합니다
6. "Push origin" 버튼을 클릭하여 GitHub에 업로드합니다

### 방법 3: Replit의 Version Control 사용

1. Replit 왼쪽 사이드바에서 Version Control 아이콘을 클릭합니다
2. 변경된 파일들을 확인합니다
3. 커밋 메시지를 입력합니다
4. "Commit & push" 버튼을 클릭합니다

## ✅ 배포 확인

GitHub에 푸시한 후 약 1-2분 후:

1. https://gracescatering.com 방문
2. 브라우저에서 **Ctrl+F5** (Windows) 또는 **Cmd+Shift+R** (Mac)으로 강제 새로고침
3. 다음을 확인:
   - 네비게이션에 "Menu" 링크가 있는지
   - Menu 섹션이 표시되는지
   - 15개의 메뉴 아이템이 이미지와 함께 표시되는지
   - 카테고리 필터 버튼이 작동하는지

## 📝 메뉴 구조

### Appetizers (전채 요리)
- Cocktail Shrimp
- Crab Cakes
- Honey Glazed Cod
- Salmon

### Dumplings & Rolls (만두 & 롤)
- Dumplings (Mandu)
- Steamed or Fried Mandu

### Korean Specialties (한국 특선 요리)
- Bulgogi
- Chicken Wings
- Galbi
- Korean Style Chicken

### Salads (샐러드)
- Chicken Salad
- Egg Salad
- Garden Salad
- Tuna Salad
- Fruits & Cheese

## 🎨 메뉴 기능

- **카테고리 필터링**: 5개의 카테고리 버튼으로 메뉴 필터링
- **반응형 디자인**: 모든 기기에서 아름답게 표시
- **호버 효과**: 메뉴 아이템에 마우스를 올리면 확대 효과
- **애니메이션**: 부드러운 페이드인 애니메이션

## 📞 문제 발생 시

배포 후 문제가 발생하면:
1. GitHub Pages 설정 확인: Repository Settings > Pages
2. 브라우저 캐시 완전 삭제
3. GitHub Actions 탭에서 배포 상태 확인

---

**참고**: `upload-to-github.mjs` 스크립트도 생성되었지만, GitHub Token이 필요합니다. 위의 방법 1-3이 더 간단합니다.
