// 在 navigation.js 中添加电视遥控器导航逻辑
   document.addEventListener('keydown', (e) => {
       const focused = document.activeElement;
       
       // 方向键导航
       switch(e.key) {
           case 'ArrowUp':
               focusPreviousRow();
               break;
           case 'ArrowDown':
               focusNextRow();
               break;
           case 'Enter':
               openSelectedItem();
               break;
       }
   });
