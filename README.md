# MY MAA Markets — Pixel-Exact Static Homepage

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000 (1920px fixed canvas).

## Project structure
```
mymaamarkets-homepage-static/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── index.module.css
│   └── globals.css
├── components/
│   └── HP.tsx
├── public/
│   └── images/ (assets)
└── ...
```

## Fonts
- Headings: **Poppins** via `next/font/google`
- Body: **Inter** via `next/font/google`

## Important
- **index.module.css** is kept **AS-IS**. Paste your original exported Figma CSS into `app/index.module.css` to get the exact look.
- All `<Image>` tags currently point to `/images/blank.png` to satisfy Next.js. If your CSS sets background-images, it will render correctly once CSS is pasted.
- If you want specific `<Image src>` assets per layer instead of CSS backgrounds, update `components/HP.tsx`.

## Assets detected (public/images)
- ._02be5637d9b2c1301a6b40267ffd16a386072c4b.png
- ._13a9084b8248d80060315dbfc768a7327986187d.png
- ._1d9b7e343e74ec94e1756509295a223fc8fbd958 (1).png
- ._1d9b7e343e74ec94e1756509295a223fc8fbd958.png
- ._1ffd19be41c3300070ac389f38ea121bded2bca1.jpg
- ._265eebd2b6317f23a1acebac650ee1f755360070.png
- ._27fad9d39e5a2cd211eccae1c078f9577d555b30.png
- ._2aa9d4410d3ea6670bef39d3b18218efdbe5fd6b.png
- ._34448a86e05b284dc97d27391f8a640d43928118.jpg
- ._3bd0c5f448aaacf0409ff41089afafe6e35e916a.png
- ._4a8a9ffa595721a8ae7359e86abe71034d6f75ee.png
- ._4a9eb3acf8c2393ca8f785f1f686fa6a02397cd4.png
- ._4fd785fe4c4c2e7698275a3f5fb2405d77ed0291.png
- ._53eb5fa3b946ae593d5f52dc88067e152c310370.png
- ._5e115c5ce07b2df01955818a88c27a35cf62fcd0.png
- ._6b4746e5a3bea8950366c03c1e7e26f6ae023d6c (1).png
- ._6b4746e5a3bea8950366c03c1e7e26f6ae023d6c (2).png
- ._6b4746e5a3bea8950366c03c1e7e26f6ae023d6c.png
- ._6ec05751ae71959106d606fc9a96a43fe29aeb00.png
- ._74f0e992b749cc1aff1ddd33bc3e441473eacee3 (1).png
- ._74f0e992b749cc1aff1ddd33bc3e441473eacee3.png
- ._7523f2506ca99f361fe00f60a719eb9ef1999855.png
- ._8982cba4ad8edbda881c0c53e88962486722b4a7.png
- ._95da7dfa10f6a828f8a61bfdd72c6d4c53170602.jpg
- ._97e4d240d3612542cf134a3a732b6e1efc02e5c4.png
- ._99f43f1a23563d9510e22da95c8accd130149629.jpg
- ._ChatGPT Image Sep 11, 2025, 08_52_57 AM 2.png
- ._ChatGPT Image Sep 23, 2025, 03_43_51 PM 2.png
- ._ChatGPT Image Sep 3, 2025, 02_57_34 PM 1.png
- ._ChatGPT Image Sep 3, 2025, 02_57_34 PM 3.png
- ._a4081904c80a6300fcea4dde79403db29d4d640e.png
- ._aa30114e5b9e719a4c66a075eb6e6898d80f58aa.jpg
- ._b111c55b96e859f7b423045e80ebc46bdf5b2001.png
- ._b7224a363286855a0d05886086873d2c58d1c7b9.png
- ._b971f5713dc18df9591219a7de58125491e6c47b.png
- ._ba5ea9ce6ed5169f5e770f9c0c1a3da55379d47e.png
- ._bad9d7101e79afecd5120a93f34e989f840ca48f.png
- ._bfefd8c2ac54d518134f98d960b1f8cac7d69fd2.png
- ._d094d3275b66b681c9acdf0379ce95d948ad8e3a.png
- ._d5caa6e7a71ff77016b29c6e0c53b9946853715d.png
- ._d6e1a1cd46442cab4f52d61a92e998d309450816.png
- ._d9e4d104aa891151d40fcf1b5dc37367a6c7bed7.png
- ._d9fc38b896fa2426e74e18063855767f68c8ef5b.png
- ._e41bcad11ff07eebabf4ba8dc25b65a3d3667049.png
- ._e9247ba90795e3ac1408f6f81e0e2c716d80f40e.jpg
- ._effe4ce64a17c2509f7644839f3f235a056b9e5a.png
- ._f09483ccefe6e7897885e126349c746aa23472da.png
- 02be5637d9b2c1301a6b40267ffd16a386072c4b.png
- 13a9084b8248d80060315dbfc768a7327986187d.png
- 1d9b7e343e74ec94e1756509295a223fc8fbd958 (1).png
- 1d9b7e343e74ec94e1756509295a223fc8fbd958.png
- 1ffd19be41c3300070ac389f38ea121bded2bca1.jpg
- 265eebd2b6317f23a1acebac650ee1f755360070.png
- 27fad9d39e5a2cd211eccae1c078f9577d555b30.png
- 2aa9d4410d3ea6670bef39d3b18218efdbe5fd6b.png
- 34448a86e05b284dc97d27391f8a640d43928118.jpg
- 3bd0c5f448aaacf0409ff41089afafe6e35e916a.png
- 4a8a9ffa595721a8ae7359e86abe71034d6f75ee.png
- 4a9eb3acf8c2393ca8f785f1f686fa6a02397cd4.png
- 4fd785fe4c4c2e7698275a3f5fb2405d77ed0291.png
- 53eb5fa3b946ae593d5f52dc88067e152c310370.png
- 5e115c5ce07b2df01955818a88c27a35cf62fcd0.png
- 6b4746e5a3bea8950366c03c1e7e26f6ae023d6c (1).png
- 6b4746e5a3bea8950366c03c1e7e26f6ae023d6c (2).png
- 6b4746e5a3bea8950366c03c1e7e26f6ae023d6c.png
- 6ec05751ae71959106d606fc9a96a43fe29aeb00.png
- 74f0e992b749cc1aff1ddd33bc3e441473eacee3 (1).png
- 74f0e992b749cc1aff1ddd33bc3e441473eacee3.png
- 7523f2506ca99f361fe00f60a719eb9ef1999855.png
- 8982cba4ad8edbda881c0c53e88962486722b4a7.png
- 95da7dfa10f6a828f8a61bfdd72c6d4c53170602.jpg
- 97e4d240d3612542cf134a3a732b6e1efc02e5c4.png
- 99f43f1a23563d9510e22da95c8accd130149629.jpg
- Arrow 10.svg
- Arrow 11.svg
- ChatGPT Image Sep 11, 2025, 08_52_57 AM 2.png
- ChatGPT Image Sep 23, 2025, 03_43_51 PM 2.png
- ChatGPT Image Sep 3, 2025, 02_57_34 PM 1.png
- ChatGPT Image Sep 3, 2025, 02_57_34 PM 3.png
- Chevron down.svg
- Chevron up.svg
- Clip path group.svg
- DCC logo 1.svg
- Ellipse 92.svg
- Group 12.svg
- Group 13.svg
- Group 14.svg
- Group 1597880442.svg
- Group 1597880445.svg
- Group 1597880446.svg
- Group 1597880659.svg
- Group 1597880752.svg
- Group 1597880753.svg
- Group 1597880754.svg
- Group 1597880755.svg
- Group 1597880821.svg
- Group 1597880822.svg
- Group 1597880823.svg
- Group 1597880824.svg
- Group 1597880825.svg
- Group 1597880828.svg
- Group 1597880830.svg
- Group 1597880849.svg
- Group 1597880867.svg
- Group 1597880868.svg
- Group 1597880869.svg
- Group 1597880870.svg
- Group 1597880903.svg
- Group 1597880911.svg
- Group 1597880912.svg
- Group 1597880913.svg
- Group 1597880920.svg
- Group 1597880921.svg
- Group 1597881021.svg
- Group 1597881022.svg
- Group 1597881023.svg
- Group 1597881025.svg
- Group 269-1.svg
- Group 269.svg
- Group 270.svg
- Group 8.svg
- Group 9.svg
- Group-1.svg
- Group-2.svg
- Group-3.svg
- Group-4.svg
- Group-5.svg
- Group-6.svg
- Group-7.svg
- Group-8.svg
- Group-9.svg
- Group.svg
- Layer_1.svg
- Star 1.svg
- Star 2.svg
- Star 3.svg
- Star 4.svg
- Star 5.svg
- Vector-1.svg
- Vector-10.svg
- Vector-11.svg
- Vector-12.svg
- Vector-2.svg
- Vector-3.svg
- Vector-4.svg
- Vector-5.svg
- Vector-6.svg
- Vector-7.svg
- Vector-8.svg
- Vector-9.svg
- Vector.svg
- a4081904c80a6300fcea4dde79403db29d4d640e.png
- aa30114e5b9e719a4c66a075eb6e6898d80f58aa.jpg
- b111c55b96e859f7b423045e80ebc46bdf5b2001.png
- b7224a363286855a0d05886086873d2c58d1c7b9.png
- b971f5713dc18df9591219a7de58125491e6c47b.png
- ba5ea9ce6ed5169f5e770f9c0c1a3da55379d47e.png
- bad9d7101e79afecd5120a93f34e989f840ca48f.png
- bfefd8c2ac54d518134f98d960b1f8cac7d69fd2.png
- blank.png
- clippath-1-1.svg
- clippath-1-2.svg
- clippath-1.svg
- clippath-11.svg
- clippath-2-1.svg
- clippath-2-2.svg
- clippath-2.svg
- clippath-21.svg
- clippath-3-1.svg
- clippath-3-2.svg
- clippath-3.svg
- clippath-4-1.svg
- clippath-4.svg
- clippath-5-1.svg
- clippath-5.svg
- clippath-6-1.svg
- clippath-6.svg
- clippath-7.svg
- clippath-8.svg
- clippath-9.svg
- clippath.svg
- d094d3275b66b681c9acdf0379ce95d948ad8e3a.png
- d5caa6e7a71ff77016b29c6e0c53b9946853715d.png
- d6e1a1cd46442cab4f52d61a92e998d309450816.png
- d9e4d104aa891151d40fcf1b5dc37367a6c7bed7.png
- d9fc38b896fa2426e74e18063855767f68c8ef5b.png
- e41bcad11ff07eebabf4ba8dc25b65a3d3667049.png
- e9247ba90795e3ac1408f6f81e0e2c716d80f40e.jpg
- effe4ce64a17c2509f7644839f3f235a056b9e5a.png
- f09483ccefe6e7897885e126349c746aa23472da.png
