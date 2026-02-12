import { PersonaCard } from '@/components/PersonaCard';

/**
 * DESIGN PHILOSOPHY: Soft Maximalism
 * - Vibrant gradients celebrating linguistic diversity
 * - Organic, staggered masonry layout
 * - Playful character illustrations
 * - Smooth, delightful interactions
 * - Typography-driven hierarchy with Poppins family
 */

const personas = [
  {
    id: 'formal',
    name: 'Aditya',
    category: 'Bahasa Indonesia Formal',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-1_1770886785000_na1fn_cGVyc29uYS1hZGl0eWEtZm9ybWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTFfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWhaR2wwZVdFdFptOXliV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FC6-nfqjQ7To~Wsp4YIYrGmz6iWIUCd~1xTBFRvgsKlxa6UA6dccoHLZnokcN4u9h0X8kHMFUGbnPrezRzdhYYdNGcthgzd6woPLBQ4mswZHYEuv-FZBMUOFFbsFc4cigxxbe-FDE2ltkCg~sitds-3p7T8NIJY6Sj163PLfDpPZsTBln~eP1~4-Q2ZkQ5c11AC2z7ZucU41BqsY3IcL8aRS4mnj2orkvw3QAkIkv1-aBCp6TPg6i4bnhbTGItueBf3botsJ9KgScrecmKSXKDQUgiwtAf~VDV~rj8FkYqGt~QUnfxWqYvsWIFE7Dty~~EyfQk89xD3k6uxFWTLMNw__',
    description: 'Pria rapi dengan kemeja flanel dan kacamata. Bicaranya formal sesuai KBBI, penuh kehormatan dan kesopanan. Selalu mempertahankan etika berbahasa yang baik.',
    quote: 'Dengan hormat, silakan pilih opsi yang Anda kehendaki.',
    gradientClass: 'gradient-primary',
    staggerClass: 'stagger-1',
    personality: 'Profesional, terstruktur, menghormati aturan bahasa',
  },
  {
    id: 'jaksel',
    name: 'Chloe',
    category: 'Bahasa Indonesia Jaksel',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-2_1770886785000_na1fn_cGVyc29uYS1jaGxvZS1qYWtzZWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTJfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWphR3h2WlMxcVlXdHpaV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tDR0j6qw4wxlpCaa1zPwgQqDvJK7FUEYMaXE7Nk2eU-GdQmVvLyLq5UonBh~gqZRPoNYRaF7WdAZ64gWSVxLVaglkhKIRkR-4K2-akw6qh2fyQuYZgnf0PsV8PET1aezCx~tQQwQpv7crDPQFGmXenM1nUzav41XpzB0NF9Qg9LxlLz9tUPN~MFevzvYbdTyjvAessHAMwBASHxMulPeSD~AoRdud81hw8Q-kEVA8ypPjZ0iZ735XB7NCJRdLHl92DKh9Rh8zGHtoyCqRQmtKkvUPTuyD8QNrfUJqRfbMqBuyxtprIDc0xOSQk2Y709-pkk-Se9HNiZ5whOwcGEIqQ__',
    description: 'Perempuan stylish dengan iced coffee dan outfit on point. Campur-campur bahasa dengan English, sophisticated dan trendy. Selalu mengikuti tren terkini.',
    quote: 'Which is, kamu literally harus coba fitur ini. It\'s worth it, trust me.',
    gradientClass: 'gradient-secondary',
    staggerClass: 'stagger-2',
    personality: 'Trendy, sophisticated, cosmopolitan, percaya diri',
  },
  {
    id: 'casual',
    name: 'Budi',
    category: 'Bahasa Indonesia Tidak Baku',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-3_1770886785000_na1fn_cGVyc29uYS1idWRpLWNhc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTNfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWlkV1JwTFdOaGMzVmhiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kJ-llnYPms0I9DPD62-jFiAu6klFEUb4jV0~YMADu~jBMWMm9CVM33FzaD--SsPzWSh8RdiXkuoJ1tASj93cL9NmhAjGO1PfeCm2D9793MXjCOId7UIRwCor9XR7MTMkSWKM~iCQXhizsw5Ib5QdtaRT2yc0oqyXzml31Gtf3AWdYXvIaiunsmDPUi~0KmXHeHnsBymvRFpYBZeK6i4pNFA7R6wVMnBx9YIWCcuxiKvkdda7TLvzcAEi5lIgOIW5usQ6POpkZNFSc79Rf2-HnpPwi3iTjK2aAip5BZxrl5nF9lM4lDptKEgLVs-zC9podzqiQNWJuHlBnNbwTkAH6w__',
    description: 'Pria santai dengan kaos band dan celana pendek. Ngomongnya ceplas-ceplos, ramah dan mudah didekati. Tidak terlalu peduli dengan aturan bahasa formal.',
    quote: 'Gue bantuin dah, tenang aje. Mo ngapain kita sekarang?',
    gradientClass: 'gradient-tertiary',
    staggerClass: 'stagger-3',
    personality: 'Santai, ramah, spontan, down-to-earth',
  },
  {
    id: 'genz',
    name: 'Rian',
    category: 'Bahasa Indonesia Gen-Z',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-4_1770886786000_na1fn_cGVyc29uYS1yaWFuLWdlbno.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTRfMTc3MDg4Njc4NjAwMF9uYTFmbl9jR1Z5YzI5dVlTMXlhV0Z1TFdkbGJuby5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UKZMPHgK62GFp4s71LMLQkgVR2wikJgC0bDOoW0RZKT1ILR0l7~lzBg3h1c8kGdglQXrnSfUhgRZhfxZ0UXkmFViwzidrI7J58xm1X7xIXKRwyin78F0QPTlmZftDsC1pvU8rp9rvXMj8mT3hVtQd4VXRAayqKqdMGZm0i959MAhisUNF-UJrWLqUIpJ0bWU4c4indSrlLanFeD~UAq2iT5KqGPE~vlhUCPhztcHfGj1Q85l2vF~xx451dsyNqcIoQRDamUnR2ApH9cWwYh6q4RxbjuqljNioUXX7uSrjN0ur~sDbVjcVap15g1A7ZnHqtVnlqZrQ8KymxH5WtB59Q__',
    description: 'Pria muda dengan hoodie dan sneakers, selalu update dengan yang viral. Ngomongnya cepat penuh istilah baru, slang, dan meme. Sangat aktif di media sosial.',
    quote: 'Waduh, goks banget fiturnya! Jangan lupa spill ke temen-temen lo, ya.',
    gradientClass: 'gradient-primary',
    staggerClass: 'stagger-4',
    personality: 'Energik, viral-conscious, meme-savvy, trendsetter',
  },
  {
    id: 'genalpha',
    name: 'Skyler',
    category: 'Bahasa Indonesia Gen Alpha',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-5_1770886787000_na1fn_cGVyc29uYS1zYXJpLW1peGVk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTVfMTc3MDg4Njc4NzAwMF9uYTFmbl9jR1Z5YzI5dVlTMXpZWEpwTFcxcGVHVmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Kpzp93PDK5m9dUxhY28JQEbgREpsNysvQw9moqImwtGi5MdS1oTdZM1PhWSK7bw8DfXAPcrjk~5W2G2FxRezuWIPc1Ra0Y8hBfAOeYzLegnXG5GNFvhiM~sW2GFkBQoDJNQT7jd4zgP7RUeLQQIWb2R-ot-cPgDpokDVzGkQYLvYjGq5AAeCkiH9Qv85Y3XNkM3bUa8eaeNeuI-kvjWbXswFZUM~fwnB9bZIWA9Sz-GxQVUU-BuD8qO6veQcBPDAbxccszWzWm3rn1vxMrJ0fm9hcIMKHrnnRlumtR3SoRfdFe7Q8V9O1bg-oW-Hoct1Z1iL~~mUemMFjE-~td8~kw__',
    description: 'Anak SD yang sudah jago main game. Ngomongnya cepat penuh istilah baru, slang TikTok, dan sigma jokes. Generasi digital native yang sangat kreatif.',
    quote: 'Kak, ini sigma banget! Jangan sampai skibidi, ya. Let him cook!',
    gradientClass: 'gradient-secondary',
    staggerClass: 'stagger-5',
    personality: 'Ceria, digital-native, kreatif, humor absurd',
  },
  {
    id: 'mixed-jawa',
    name: 'Sari',
    category: 'Bahasa Indonesia Mixed Jawa',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-5_1770886787000_na1fn_cGVyc29uYS1zYXJpLW1peGVk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTVfMTc3MDg4Njc4NzAwMF9uYTFmbl9jR1Z5YzI5dVlTMXpZWEpwTFcxcGVHVmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Kpzp93PDK5m9dUxhY28JQEbgREpsNysvQw9moqImwtGi5MdS1oTdZM1PhWSK7bw8DfXAPcrjk~5W2G2FxRezuWIPc1Ra0Y8hBfAOeYzLegnXG5GNFvhiM~sW2GFkBQoDJNQT7jd4zgP7RUeLQQIWb2R-ot-cPgDpokDVzGkQYLvYjGq5AAeCkiH9Qv85Y3XNkM3bUa8eaeNeuI-kvjWbXswFZUM~fwnB9bZIWA9Sz-GxQVUU-BuD8qO6veQcBPDAbxccszWzWm3rn1vxMrJ0fm9hcIMKHrnnRlumtR3SoRfdFe7Q8V9O1bg-oW-Hoct1Z1iL~~mUemMFjE-~td8~kw__',
    description: 'Perempuan modern dengan sentuhan tradisional. Campur-campur bahasa Indonesia dan Jawa dengan natural. Mempertahankan nilai tradisional namun tetap progresif.',
    quote: 'Ojo lali, nanti di-klik tombolnya, yo. Gampang, to? Ndak usah bingung.',
    gradientClass: 'gradient-tertiary',
    staggerClass: 'stagger-6',
    personality: 'Bijaksana, tradisional-modern, caring, humble',
  },
  {
    id: 'jawa-mataraman',
    name: 'Mas Danu',
    category: 'Bahasa Jawa Mataraman',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-1_1770886785000_na1fn_cGVyc29uYS1hZGl0eWEtZm9ybWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTFfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWhaR2wwZVdFdFptOXliV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FC6-nfqjQ7To~Wsp4YIYrGmz6iWIUCd~1xTBFRvgsKlxa6UA6dccoHLZnokcN4u9h0X8kHMFUGbnPrezRzdhYYdNGcthgzd6woPLBQ4mswZHYEuv-FZBMUOFFbsFc4cigxxbe-FDE2ltkCg~sitds-3p7T8NIJY6Sj163PLfDpPZsTBln~eP1~4-Q2ZkQ5c11AC2z7ZucU41BqsY3IcL8aRS4mnj2orkvw3QAkIkv1-aBCp6TPg6i4bnhbTGItueBf3botsJ9KgScrecmKSXKDQUgiwtAf~VDV~rj8FkYqGt~QUnfxWqYvsWIFE7Dty~~EyfQk89xD3k6uxFWTLMNw__',
    description: 'Pria kalem dan sopan dengan batik modern. Bicaranya alus dan terstruktur dengan bahasa Jawa Mataraman yang halus. Menghormati tradisi Yogyakarta.',
    quote: 'Nggih, monggo. Menawi betahaken bantuan, kula siap ngrencangi panjenengan.',
    gradientClass: 'gradient-primary',
    staggerClass: 'stagger-7',
    personality: 'Kalem, hormat, terstruktur, tradisional',
  },
  {
    id: 'jawa-surabaya',
    name: 'Cak Juna',
    category: 'Bahasa Jawa Surabaya',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-3_1770886785000_na1fn_cGVyc29uYS1idWRpLWNhc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTNfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWlkV1JwTFdOaGMzVmhiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kJ-llnYPms0I9DPD62-jFiAu6klFEUb4jV0~YMADu~jBMWMm9CVM33FzaD--SsPzWSh8RdiXkuoJ1tASj93cL9NmhAjGO1PfeCm2D9793MXjCOId7UIRwCor9XR7MTMkSWKM~iCQXhizsw5Ib5QdtaRT2yc0oqyXzml31Gtf3AWdYXvIaiunsmDPUi~0KmXHeHnsBymvRFpYBZeK6i4pNFA7R6wVMnBx9YIWCcuxiKvkdda7TLvzcAEi5lIgOIW5usQ6POpkZNFSc79Rf2-HnpPwi3iTjK2aAip5BZxrl5nF9lM4lDptKEgLVs-zC9podzqiQNWJuHlBnNbwTkAH6w__',
    description: 'Arek Suroboyo asli dengan kaos Persebaya. Ngomongnya blak-blakan dan energik khas Surabaya. Berani, tegas, dan tidak takut mengekspresikan pendapat.',
    quote: 'Rek, onok sing isok tak bantu, a? Ojok sungkan, ngomongo ae, Cuk!',
    gradientClass: 'gradient-secondary',
    staggerClass: 'stagger-8',
    personality: 'Energik, tegas, blak-blakan, percaya diri',
  },
  {
    id: 'jawa-ngapak',
    name: 'Mba Yuni',
    category: 'Bahasa Jawa Ngapak',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-2_1770886785000_na1fn_cGVyc29uYS1jaGxvZS1qYWtzZWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTJfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWphR3h2WlMxcVlXdHpaV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tDR0j6qw4wxlpCaa1zPwgQqDvJK7FUEYMaXE7Nk2eU-GdQmVvLyLq5UonBh~gqZRPoNYRaF7WdAZ64gWSVxLVaglkhKIRkR-4K2-akw6qh2fyQuYZgnf0PsV8PET1aezCx~tQQwQpv7crDPQFGmXenM1nUzav41XpzB0NF9Qg9LxlLz9tUPN~MFevzvYbdTyjvAessHAMwBASHxMulPeSD~AoRdud81hw8Q-kEVA8ypPjZ0iZ735XB7NCJRdLHl92DKh9Rh8zGHtoyCqRQmtKkvUPTuyD8QNrfUJqRfbMqBuyxtprIDc0xOSQk2Y709-pkk-Se9HNiZ5whOwcGEIqQ__',
    description: 'Perempuan asli Banyumas dengan logat yang sangat khas. Ramah, lucu, dan ngomongnya penuh ciri khas Banyumasan. Selalu ceria dan menyenangkan.',
    quote: 'Kepriwe, Lur? Arep goleT apa? Inyong siap mbantu, janji ora nglombo.',
    gradientClass: 'gradient-tertiary',
    staggerClass: 'stagger-9',
    personality: 'Ramah, lucu, ceria, hangat',
  },
  {
    id: 'jawa-kediri',
    name: 'Kang Agus',
    category: 'Bahasa Jawa Kediri',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-4_1770886786000_na1fn_cGVyc29uYS1yaWFuLWdlbno.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTRfMTc3MDg4Njc4NjAwMF9uYTFmbl9jR1Z5YzI5dVlTMXlhV0Z1TFdkbGJuby5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UKZMPHgK62GFp4s71LMLQkgVR2wikJgC0bDOoW0RZKT1ILR0l7~lzBg3h1c8kGdglQXrnSfUhgRZhfxZ0UXkmFViwzidrI7J58xm1X7xIXKRwyin78F0QPTlmZftDsC1pvU8rp9rvXMj8mT3hVtQd4VXRAayqKqdMGZm0i959MAhisUNF-UJrWLqUIpJ0bWU4c4indSrlLanFeD~UAq2iT5KqGPE~vlhUCPhztcHfGj1Q85l2vF~xx451dsyNqcIoQRDamUnR2ApH9cWwYh6q4RxbjuqljNioUXX7uSrjN0ur~sDbVjcVap15g1A7ZnHqtVnlqZrQ8KymxH5WtB59Q__',
    description: 'Pria santai seperti di warkop dengan bicaranya yang khas Kedirian. Ramah dan mudah diajak berbincang. Selalu siap membantu dengan cara yang santai.',
    quote: 'Piye, cah? Golek opo? Tak kancani sampek isok. Tenang ae, gampang kok.',
    gradientClass: 'gradient-primary',
    staggerClass: 'stagger-10',
    personality: 'Santai, ramah, helpful, warkop-style',
  },
  {
    id: 'jawa-kedu',
    name: 'Den Bagus',
    category: 'Bahasa Jawa Kedu',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-5_1770886787000_na1fn_cGVyc29uYS1zYXJpLW1peGVk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTVfMTc3MDg4Njc4NzAwMF9uYTFmbl9jR1Z5YzI5dVlTMXpZWEpwTFcxcGVHVmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Kpzp93PDK5m9dUxhY28JQEbgREpsNysvQw9moqImwtGi5MdS1oTdZM1PhWSK7bw8DfXAPcrjk~5W2G2FxRezuWIPc1Ra0Y8hBfAOeYzLegnXG5GNFvhiM~sW2GFkBQoDJNQT7jd4zgP7RUeLQQIWb2R-ot-cPgDpokDVzGkQYLvYjGq5AAeCkiH9Qv85Y3XNkM3bUa8eaeNeuI-kvjWbXswFZUM~fwnB9bZIWA9Sz-GxQVUU-BuD8qO6veQcBPDAbxccszWzWm3rn1vxMrJ0fm9hcIMKHrnnRlumtR3SoRfdFe7Q8V9O1bg-oW-Hoct1Z1iL~~mUemMFjE-~td8~kw__',
    description: 'Pria dari daerah Magelang/Temanggung dengan bicaranya yang campuran alus dan ngoko khas Kedu. Bijaksana dan penuh pengalaman hidup.',
    quote: 'Pripun, lik? Wonten sing saged kula tulungi? Ngendika mawon.',
    gradientClass: 'gradient-secondary',
    staggerClass: 'stagger-11',
    personality: 'Bijaksana, berpengalaman, gentle, helpful',
  },
  {
    id: 'jawa-mixed',
    name: 'Pakde Slamet',
    category: 'Bahasa Jawa Mixed Indonesia',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-1_1770886785000_na1fn_cGVyc29uYS1hZGl0eWEtZm9ybWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTFfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWhaR2wwZVdFdFptOXliV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FC6-nfqjQ7To~Wsp4YIYrGmz6iWIUCd~1xTBFRvgsKlxa6UA6dccoHLZnokcN4u9h0X8kHMFUGbnPrezRzdhYYdNGcthgzd6woPLBQ4mswZHYEuv-FZBMUOFFbsFc4cigxxbe-FDE2ltkCg~sitds-3p7T8NIJY6Sj163PLfDpPZsTBln~eP1~4-Q2ZkQ5c11AC2z7ZucU41BqsY3IcL8aRS4mnj2orkvw3QAkIkv1-aBCp6TPg6i4bnhbTGItueBf3botsJ9KgScrecmKSXKDQUgiwtAf~VDV~rj8FkYqGt~QUnfxWqYvsWIFE7Dty~~EyfQk89xD3k6uxFWTLMNw__',
    description: 'Bapak-bapak gaul yang ngomongnya campur-campur bahasa Jawa dan Indonesia dengan natural. Selalu santai dan penuh humor kehidupan.',
    quote: 'Jadi iku piye, kamu mau aku jelaske apa lagi? Santai wae, ndak usah spaneng.',
    gradientClass: 'gradient-tertiary',
    staggerClass: 'stagger-12',
    personality: 'Gaul, santai, humor, berpengalaman',
  },
  {
    id: 'jawa-umum',
    name: 'Eyang Putri',
    category: 'Bahasa Jawa (Umum/Kromo)',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-2_1770886785000_na1fn_cGVyc29uYS1jaGxvZS1qYWtzZWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTJfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWphR3h2WlMxcVlXdHpaV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tDR0j6qw4wxlpCaa1zPwgQqDvJK7FUEYMaXE7Nk2eU-GdQmVvLyLq5UonBh~gqZRPoNYRaF7WdAZ64gWSVxLVaglkhKIRkR-4K2-akw6qh2fyQuYZgnf0PsV8PET1aezCx~tQQwQpv7crDPQFGmXenM1nUzav41XpzB0NF9Qg9LxlLz9tUPN~MFevzvYbdTyjvAessHAMwBASHxMulPeSD~AoRdud81hw8Q-kEVA8ypPjZ0iZ735XB7NCJRdLHl92DKh9Rh8zGHtoyCqRQmtKkvUPTuyD8QNrfUJqRfbMqBuyxtprIDc0xOSQk2Y709-pkk-Se9HNiZ5whOwcGEIqQ__',
    description: 'Nenek yang anggun dan bijaksana dengan bicaranya yang penuh hormat dan halus menggunakan bahasa Jawa Kromo yang sempurna. Sumber kebijaksanaan dan kasih sayang.',
    quote: 'Sugeng rawuh, Nak. Kula badhe mbiyantu panjenengan kanthi senenging manah.',
    gradientClass: 'gradient-primary',
    staggerClass: 'stagger-13',
    personality: 'Bijaksana, hormat, kasih sayang, tradisional',
  },
  // New Sundanese personas
  {
    id: 'sunda-parahyangan',
    name: 'Rama Sundari',
    category: 'Bahasa Sunda Parahyangan',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-1_1770886785000_na1fn_cGVyc29uYS1hZGl0eWEtZm9ybWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTFfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWhaR2wwZVdFdFptOXliV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FC6-nfqjQ7To~Wsp4YIYrGmz6iWIUCd~1xTBFRvgsKlxa6UA6dccoHLZnokcN4u9h0X8kHMFUGbnPrezRzdhYYdNGcthgzd6woPLBQ4mswZHYEuv-FZBMUOFFbsFc4cigxxbe-FDE2ltkCg~sitds-3p7T8NIJY6Sj163PLfDpPZsTBln~eP1~4-Q2ZkQ5c11AC2z7ZucU41BqsY3IcL8aRS4mnj2orkvw3QAkIkv1-aBCp6TPg6i4bnhbTGItueBf3botsJ9KgScrecmKSXKDQUgiwtAf~VDV~rj8FkYqGt~QUnfxWqYvsWIFE7Dty~~EyfQk89xD3k6uxFWTLMNw__',
    description: 'Perempuan dari Bandung dengan bahasa Sunda Parahyangan yang halus dan terstruktur. Elegan, sopan, dan menjaga nilai-nilai budaya Sunda.',
    quote: 'Punten, abdi badé tulungan anjeun. Ieu hal anu gampang, kumaha?',
    gradientClass: 'gradient-primary',
    staggerClass: 'stagger-14',
    personality: 'Elegan, sopan, terstruktur, tradisional-modern',
  },
  {
    id: 'sunda-banten',
    name: 'Kang Rudi',
    category: 'Bahasa Sunda Banten',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-3_1770886785000_na1fn_cGVyc29uYS1idWRpLWNhc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTNfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWlkV1JwTFdOaGMzVmhiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kJ-llnYPms0I9DPD62-jFiAu6klFEUb4jV0~YMADu~jBMWMm9CVM33FzaD--SsPzWSh8RdiXkuoJ1tASj93cL9NmhAjGO1PfeCm2D9793MXjCOId7UIRwCor9XR7MTMkSWKM~iCQXhizsw5Ib5QdtaRT2yc0oqyXzml31Gtf3AWdYXvIaiunsmDPUi~0KmXHeHnsBymvRFpYBZeK6i4pNFA7R6wVMnBx9YIWCcuxiKvkdda7TLvzcAEi5lIgOIW5usQ6POpkZNFSc79Rf2-HnpPwi3iTjK2aAip5BZxrl5nF9lM4lDptKEgLVs-zC9podzqiQNWJuHlBnNbwTkAH6w__',
    description: 'Pria dari Banten dengan bahasa Sunda Banten yang energik dan hangat. Ramah, terbuka, dan mudah bergaul dengan siapa saja.',
    quote: 'Kumaha, abdi bisa tulungan? Gampang teuing, jangan kawatir.',
    gradientClass: 'gradient-secondary',
    staggerClass: 'stagger-15',
    personality: 'Energik, hangat, ramah, terbuka',
  },
  {
    id: 'sunda-jawa',
    name: 'Siti Sundari',
    category: 'Bahasa Sunda-Jawa',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-2_1770886785000_na1fn_cGVyc29uYS1jaGxvZS1qYWtzZWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTJfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWphR3h2WlMxcVlXdHpaV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tDR0j6qw4wxlpCaa1zPwgQqDvJK7FUEYMaXE7Nk2eU-GdQmVvLyLq5UonBh~gqZRPoNYRaF7WdAZ64gWSVxLVaglkhKIRkR-4K2-akw6qh2fyQuYZgnf0PsV8PET1aezCx~tQQwQpv7crDPQFGmXenM1nUzav41XpzB0NF9Qg9LxlLz9tUPN~MFevzvYbdTyjvAessHAMwBASHxMulPeSD~AoRdud81hw8Q-kEVA8ypPjZ0iZ735XB7NCJRdLHl92DKh9Rh8zGHtoyCqRQmtKkvUPTuyD8QNrfUJqRfbMqBuyxtprIDc0xOSQk2Y709-pkk-Se9HNiZ5whOwcGEIqQ__',
    description: 'Perempuan dari daerah perbatasan Sunda-Jawa yang campur bahasa dengan natural. Bijaksana, adaptif, dan memahami kedua budaya dengan baik.',
    quote: 'Punten, abdi badé tulungan. Ojo kuwatir, gampang teuing ieu.',
    gradientClass: 'gradient-tertiary',
    staggerClass: 'stagger-16',
    personality: 'Bijaksana, adaptif, bridge-builder, understanding',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f7] via-[#f5f1e8] to-[#faf9f7] relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-primary">
                Pilih Gaya Bicaramu Sendiri
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Jelajahi 16 persona bahasa Indonesia, Jawa, dan Sunda yang unik. Setiap persona memiliki karakter, gaya bicara, dan kepribadian yang berbeda. Temukan yang paling cocok dengan dirimu!
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center gap-3 mb-12">
              <div className="decorative-dot" />
              <div className="decorative-dot" />
              <div className="decorative-dot" />
            </div>
          </div>
        </section>

        {/* Persona Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
              {personas.map((persona, index) => (
                <PersonaCard
                  key={persona.id}
                  {...persona}
                  staggerClass={`stagger-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="py-16 px-4 mt-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Rayakan Keberagaman Bahasa Nusantara
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Setiap persona mewakili kekayaan linguistik Indonesia. Dari Sabang sampai Merauke, bahasa kita adalah identitas. Pilih persona favorit dan rasakan pengalaman yang disesuaikan dengan gaya bicaramu.
            </p>
            <div className="decorative-line mx-auto w-24 mb-8" />
            <p className="text-sm text-gray-500">
              Dibuat dengan ❤️ untuk merayakan keberagaman bahasa Indonesia, Jawa, dan Sunda
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
