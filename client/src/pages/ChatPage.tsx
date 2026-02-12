import { useEffect, useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { useChat } from '@/contexts/ChatContext';
import { ChatBox } from '@/components/ChatBox';
import { ChatTemplateSelector } from '@/components/ChatTemplateSelector';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * DESIGN PHILOSOPHY: Soft Maximalism
 * - Vibrant gradients and smooth animations
 * - Organic layout with persona integration
 * - Playful interactions and visual hierarchy
 */

// Persona data (same as Home.tsx) - Updated with all 16 personas
const personas = [
  {
    id: 'formal',
    name: 'Aditya',
    category: 'Bahasa Indonesia Formal',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-1_1770886785000_na1fn_cGVyc29uYS1hZGl0eWEtZm9ybWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTFfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWhaR2wwZVdFdFptOXliV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FC6-nfqjQ7To~Wsp4YIYrGmz6iWIUCd~1xTBFRvgsKlxa6UA6dccoHLZnokcN4u9h0X8kHMFUGbnPrezRzdhYYdNGcthgzd6woPLBQ4mswZHYEuv-FZBMUOFFbsFc4cigxxbe-FDE2ltkCg~sitds-3p7T8NIJY6Sj163PLfDpPZsTBln~eP1~4-Q2ZkQ5c11AC2z7ZucU41BqsY3IcL8aRS4mnj2orkvw3QAkIkv1-aBCp6TPg6i4bnhbTGItueBf3botsJ9KgScrecmKSXKDQUgiwtAf~VDV~rj8FkYqGt~QUnfxWqYvsWIFE7Dty~~EyfQk89xD3k6uxFWTLMNw__',
    description: 'Pria rapi dengan kemeja flanel dan kacamata. Bicaranya formal sesuai KBBI, penuh kehormatan dan kesopanan.',
    quote: 'Dengan hormat, silakan pilih opsi yang Anda kehendaki.',
    gradientClass: 'gradient-primary',
    personality: 'Profesional, terstruktur, menghormati aturan bahasa',
  },
  {
    id: 'jaksel',
    name: 'Chloe',
    category: 'Bahasa Indonesia Jaksel',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-2_1770886785000_na1fn_cGVyc29uYS1jaGxvZS1qYWtzZWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTJfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWphR3h2WlMxcVlXdHpaV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tDR0j6qw4wxlpCaa1zPwgQqDvJK7FUEYMaXE7Nk2eU-GdQmVvLyLq5UonBh~gqZRPoNYRaF7WdAZ64gWSVxLVaglkhKIRkR-4K2-akw6qh2fyQuYZgnf0PsV8PET1aezCx~tQQwQpv7crDPQFGmXenM1nUzav41XpzB0NF9Qg9LxlLz9tUPN~MFevzvYbdTyjvAessHAMwBASHxMulPeSD~AoRdud81hw8Q-kEVA8ypPjZ0iZ735XB7NCJRdLHl92DKh9Rh8zGHtoyCqRQmtKkvUPTuyD8QNrfUJqRfbMqBuyxtprIDc0xOSQk2Y709-pkk-Se9HNiZ5whOwcGEIqQ__',
    description: 'Perempuan stylish dengan iced coffee dan outfit on point. Campur-campur bahasa dengan English, sophisticated dan trendy.',
    quote: 'Which is, kamu literally harus coba fitur ini. It\'s worth it, trust me.',
    gradientClass: 'gradient-secondary',
    personality: 'Trendy, sophisticated, cosmopolitan, percaya diri',
  },
  {
    id: 'casual',
    name: 'Budi',
    category: 'Bahasa Indonesia Tidak Baku',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-3_1770886785000_na1fn_cGVyc29uYS1idWRpLWNhc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTNfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWlkV1JwTFdOaGMzVmhiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kJ-llnYPms0I9DPD62-jFiAu6klFEUb4jV0~YMADu~jBMWMm9CVM33FzaD--SsPzWSh8RdiXkuoJ1tASj93cL9NmhAjGO1PfeCm2D9793MXjCOId7UIRwCor9XR7MTMkSWKM~iCQXhizsw5Ib5QdtaRT2yc0oqyXzml31Gtf3AWdYXvIaiunsmDPUi~0KmXHeHnsBymvRFpYBZeK6i4pNFA7R6wVMnBx9YIWCcuxiKvkdda7TLvzcAEi5lIgOIW5usQ6POpkZNFSc79Rf2-HnpPwi3iTjK2aAip5BZxrl5nF9lM4lDptKEgLVs-zC9podzqiQNWJuHlBnNbwTkAH6w__',
    description: 'Pria santai dengan kaos band dan celana pendek. Ngomongnya ceplas-ceplos, ramah dan mudah didekati.',
    quote: 'Gue bantuin dah, tenang aje. Mo ngapain kita sekarang?',
    gradientClass: 'gradient-tertiary',
    personality: 'Santai, ramah, spontan, down-to-earth',
  },
  {
    id: 'genz',
    name: 'Rian',
    category: 'Bahasa Indonesia Gen-Z',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-4_1770886786000_na1fn_cGVyc29uYS1yaWFuLWdlbno.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTRfMTc3MDg4Njc4NjAwMF9uYTFmbl9jR1Z5YzI5dVlTMXlhV0Z1TFdkbGJuby5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UKZMPHgK62GFp4s71LMLQkgVR2wikJgC0bDOoW0RZKT1ILR0l7~lzBg3h1c8kGdglQXrnSfUhgRZhfxZ0UXkmFViwzidrI7J58xm1X7xIXKRwyin78F0QPTlmZftDsC1pvU8rp9rvXMj8mT3hVtQd4VXRAayqKqdMGZm0i959MAhisUNF-UJrWLqUIpJ0bWU4c4indSrlLanFeD~UAq2iT5KqGPE~vlhUCPhztcHfGj1Q85l2vF~xx451dsyNqcIoQRDamUnR2ApH9cWwYh6q4RxbjuqljNioUXX7uSrjN0ur~sDbVjcVap15g1A7ZnHqtVnlqZrQ8KymxH5WtB59Q__',
    description: 'Pria muda dengan hoodie dan sneakers, selalu update dengan yang viral. Ngomongnya cepat penuh istilah baru, slang, dan meme.',
    quote: 'Waduh, goks banget fiturnya! Jangan lupa spill ke temen-temen lo, ya.',
    gradientClass: 'gradient-primary',
    personality: 'Energik, viral-conscious, meme-savvy, trendsetter',
  },
  {
    id: 'genalpha',
    name: 'Skyler',
    category: 'Bahasa Indonesia Gen Alpha',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-5_1770886787000_na1fn_cGVyc29uYS1zYXJpLW1peGVk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTVfMTc3MDg4Njc4NzAwMF9uYTFmbl9jR1Z5YzI5dVlTMXpZWEpwTFcxcGVHVmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Kpzp93PDK5m9dUxhY28JQEbgREpsNysvQw9moqImwtGi5MdS1oTdZM1PhWSK7bw8DfXAPcrjk~5W2G2FxRezuWIPc1Ra0Y8hBfAOeYzLegnXG5GNFvhiM~sW2GFkBQoDJNQT7jd4zgP7RUeLQQIWb2R-ot-cPgDpokDVzGkQYLvYjGq5AAeCkiH9Qv85Y3XNkM3bUa8eaeNeuI-kvjWbXswFZUM~fwnB9bZIWA9Sz-GxQVUU-BuD8qO6veQcBPDAbxccszWzWm3rn1vxMrJ0fm9hcIMKHrnnRlumtR3SoRfdFe7Q8V9O1bg-oW-Hoct1Z1iL~~mUemMFjE-~td8~kw__',
    description: 'Anak SD yang sudah jago main game. Ngomongnya cepat penuh istilah baru, slang TikTok, dan sigma jokes.',
    quote: 'Kak, ini sigma banget! Jangan sampai skibidi, ya. Let him cook!',
    gradientClass: 'gradient-secondary',
    personality: 'Ceria, digital-native, kreatif, humor absurd',
  },
  {
    id: 'mixed-jawa',
    name: 'Sari',
    category: 'Bahasa Indonesia Mixed Jawa',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-5_1770886787000_na1fn_cGVyc29uYS1zYXJpLW1peGVk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTVfMTc3MDg4Njc4NzAwMF9uYTFmbl9jR1Z5YzI5dVlTMXpZWEpwTFcxcGVHVmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Kpzp93PDK5m9dUxhY28JQEbgREpsNysvQw9moqImwtGi5MdS1oTdZM1PhWSK7bw8DfXAPcrjk~5W2G2FxRezuWIPc1Ra0Y8hBfAOeYzLegnXG5GNFvhiM~sW2GFkBQoDJNQT7jd4zgP7RUeLQQIWb2R-ot-cPgDpokDVzGkQYLvYjGq5AAeCkiH9Qv85Y3XNkM3bUa8eaeNeuI-kvjWbXswFZUM~fwnB9bZIWA9Sz-GxQVUU-BuD8qO6veQcBPDAbxccszWzWm3rn1vxMrJ0fm9hcIMKHrnnRlumtR3SoRfdFe7Q8V9O1bg-oW-Hoct1Z1iL~~mUemMFjE-~td8~kw__',
    description: 'Perempuan modern dengan sentuhan tradisional. Campur-campur bahasa Indonesia dan Jawa dengan natural.',
    quote: 'Ojo lali, nanti di-klik tombolnya, yo. Gampang, to? Ndak usah bingung.',
    gradientClass: 'gradient-tertiary',
    personality: 'Bijaksana, tradisional-modern, caring, humble',
  },
  {
    id: 'jawa-mataraman',
    name: 'Mas Danu',
    category: 'Bahasa Jawa Mataraman',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-1_1770886785000_na1fn_cGVyc29uYS1hZGl0eWEtZm9ybWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTFfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWhaR2wwZVdFdFptOXliV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FC6-nfqjQ7To~Wsp4YIYrGmz6iWIUCd~1xTBFRvgsKlxa6UA6dccoHLZnokcN4u9h0X8kHMFUGbnPrezRzdhYYdNGcthgzd6woPLBQ4mswZHYEuv-FZBMUOFFbsFc4cigxxbe-FDE2ltkCg~sitds-3p7T8NIJY6Sj163PLfDpPZsTBln~eP1~4-Q2ZkQ5c11AC2z7ZucU41BqsY3IcL8aRS4mnj2orkvw3QAkIkv1-aBCp6TPg6i4bnhbTGItueBf3botsJ9KgScrecmKSXKDQUgiwtAf~VDV~rj8FkYqGt~QUnfxWqYvsWIFE7Dty~~EyfQk89xD3k6uxFWTLMNw__',
    description: 'Pria kalem dan sopan dengan batik modern. Bicaranya alus dan terstruktur dengan bahasa Jawa Mataraman yang halus.',
    quote: 'Nggih, monggo. Menawi betahaken bantuan, kula siap ngrencangi panjenengan.',
    gradientClass: 'gradient-primary',
    personality: 'Kalem, hormat, terstruktur, tradisional',
  },
  {
    id: 'jawa-surabaya',
    name: 'Cak Juna',
    category: 'Bahasa Jawa Surabaya',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-3_1770886785000_na1fn_cGVyc29uYS1idWRpLWNhc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTNfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWlkV1JwTFdOaGMzVmhiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kJ-llnYPms0I9DPD62-jFiAu6klFEUb4jV0~YMADu~jBMWMm9CVM33FzaD--SsPzWSh8RdiXkuoJ1tASj93cL9NmhAjGO1PfeCm2D9793MXjCOId7UIRwCor9XR7MTMkSWKM~iCQXhizsw5Ib5QdtaRT2yc0oqyXzml31Gtf3AWdYXvIaiunsmDPUi~0KmXHeHnsBymvRFpYBZeK6i4pNFA7R6wVMnBx9YIWCcuxiKvkdda7TLvzcAEi5lIgOIW5usQ6POpkZNFSc79Rf2-HnpPwi3iTjK2aAip5BZxrl5nF9lM4lDptKEgLVs-zC9podzqiQNWJuHlBnNbwTkAH6w__',
    description: 'Arek Suroboyo asli dengan kaos Persebaya. Ngomongnya blak-blakan dan energik khas Surabaya.',
    quote: 'Rek, onok sing isok tak bantu, a? Ojok sungkan, ngomongo ae, Cuk!',
    gradientClass: 'gradient-secondary',
    personality: 'Energik, tegas, blak-blakan, percaya diri',
  },
  {
    id: 'jawa-ngapak',
    name: 'Mba Yuni',
    category: 'Bahasa Jawa Ngapak',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-2_1770886785000_na1fn_cGVyc29uYS1jaGxvZS1qYWtzZWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTJfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWphR3h2WlMxcVlXdHpaV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tDR0j6qw4wxlpCaa1zPwgQqDvJK7FUEYMaXE7Nk2eU-GdQmVvLyLq5UonBh~gqZRPoNYRaF7WdAZ64gWSVxLVaglkhKIRkR-4K2-akw6qh2fyQuYZgnf0PsV8PET1aezCx~tQQwQpv7crDPQFGmXenM1nUzav41XpzB0NF9Qg9LxlLz9tUPN~MFevzvYbdTyjvAessHAMwBASHxMulPeSD~AoRdud81hw8Q-kEVA8ypPjZ0iZ735XB7NCJRdLHl92DKh9Rh8zGHtoyCqRQmtKkvUPTuyD8QNrfUJqRfbMqBuyxtprIDc0xOSQk2Y709-pkk-Se9HNiZ5whOwcGEIqQ__',
    description: 'Perempuan asli Banyumas dengan logat yang sangat khas. Ramah, lucu, dan ngomongnya penuh ciri khas Banyumasan.',
    quote: 'Kepriwe, Lur? Arep goleT apa? Inyong siap mbantu, janji ora nglombo.',
    gradientClass: 'gradient-tertiary',
    personality: 'Ramah, lucu, ceria, hangat',
  },
  {
    id: 'jawa-kediri',
    name: 'Kang Agus',
    category: 'Bahasa Jawa Kediri',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-4_1770886786000_na1fn_cGVyc29uYS1yaWFuLWdlbno.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTRfMTc3MDg4Njc4NjAwMF9uYTFmbl9jR1Z5YzI5dVlTMXlhV0Z1TFdkbGJuby5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UKZMPHgK62GFp4s71LMLQkgVR2wikJgC0bDOoW0RZKT1ILR0l7~lzBg3h1c8kGdglQXrnSfUhgRZhfxZ0UXkmFViwzidrI7J58xm1X7xIXKRwyin78F0QPTlmZftDsC1pvU8rp9rvXMj8mT3hVtQd4VXRAayqKqdMGZm0i959MAhisUNF-UJrWLqUIpJ0bWU4c4indSrlLanFeD~UAq2iT5KqGPE~vlhUCPhztcHfGj1Q85l2vF~xx451dsyNqcIoQRDamUnR2ApH9cWwYh6q4RxbjuqljNioUXX7uSrjN0ur~sDbVjcVap15g1A7ZnHqtVnlqZrQ8KymxH5WtB59Q__',
    description: 'Pria santai seperti di warkop dengan bicaranya yang khas Kedirian. Ramah dan mudah diajak berbincang.',
    quote: 'Piye, cah? Golek opo? Tak kancani sampek isok. Tenang ae, gampang kok.',
    gradientClass: 'gradient-primary',
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
    personality: 'Gaul, santai, humor, berpengalaman',
  },
  {
    id: 'jawa-umum',
    name: 'Eyang Putri',
    category: 'Bahasa Jawa (Umum/Kromo)',
    avatar: 'https://private-us-east-1.manuscdn.com/sessionFile/FIShUd4oIQ2RDT2v89wHZE/sandbox/YjmBspllU0LGvd36KiBYld-img-2_1770886785000_na1fn_cGVyc29uYS1jaGxvZS1qYWtzZWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRklTaFVkNG9JUTJSRFQydjg5d0haRS9zYW5kYm94L1lqbUJzcGxsVTBMR3ZkMzZLaUJZbGQtaW1nLTJfMTc3MDg4Njc4NTAwMF9uYTFmbl9jR1Z5YzI5dVlTMWphR3h2WlMxcVlXdHpaV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tDR0j6qw4wxlpCaa1zPwgQqDvJK7FUEYMaXE7Nk2eU-GdQmVvLyLq5UonBh~gqZRPoNYRaF7WdAZ64gWSVxLVaglkhKIRkR-4K2-akw6qh2fyQuYZgnf0PsV8PET1aezCx~tQQwQpv7crDPQFGmXenM1nUzav41XpzB0NF9Qg9LxlLz9tUPN~MFevzvYbdTyjvAessHAMwBASHxMulPeSD~AoRdud81hw8Q-kEVA8ypPjZ0iZ735XB7NCJRdLHl92DKh9Rh8zGHtoyCqRQmtKkvUPTuyD8QNrfUJqRfbMqBuyxtprIDc0xOSQk2Y709-pkk-Se9HNiZ5whOwcGEIqQ__',
    description: 'Nenek yang anggun dan bijaksana dengan bicaranya yang penuh hormat dan halus menggunakan bahasa Jawa Kromo yang sempurna.',
    quote: 'Sugeng rawuh, Nak. Kula badhe mbiyantu panjenengan kanthi senenging manah.',
    gradientClass: 'gradient-primary',
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
    personality: 'Bijaksana, adaptif, bridge-builder, understanding',
  },
];

export default function ChatPage() {
  const [, params] = useRoute('/chat/:personaId');
  const [, setLocation] = useLocation();
  const { currentSession, createSession, saveToLocalStorage } = useChat();
  const [persona, setPersona] = useState<typeof personas[0] | null>(null);

  useEffect(() => {
    if (params?.personaId) {
      const found = personas.find(p => p.id === params.personaId);
      setPersona(found || null);

      // Create new session if not exists
      if (found && !currentSession) {
        createSession(found.id, found.name);
      }
    }
  }, [params?.personaId, currentSession, createSession]);

  // Auto-save to localStorage whenever chat changes
  useEffect(() => {
    saveToLocalStorage();
  }, [currentSession, saveToLocalStorage]);

  if (!persona) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Persona tidak ditemukan</p>
          <Button onClick={() => setLocation('/')} className="mt-4">
            Kembali ke Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Background Blobs */}
      <div className="blob blob-1 fixed" />
      <div className="blob blob-2 fixed" />
      <div className="blob blob-3 fixed" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLocation('/')}
                className="hover:bg-purple-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold gradient-text-primary">
                  Arutala Language Model
                </h1>
                <p className="text-sm text-gray-500">Chat dengan {persona.name}</p>
              </div>
            </div>
            <Button
              onClick={() => createSession(persona.id, persona.name)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Chat Baru
            </Button>
          </div>
        </header>

        {/* Chat Container */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <ChatBox
                personaId={persona.id}
                personaName={persona.name}
                personaAvatar={persona.avatar}
                personaCategory={persona.category}
              />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-purple-100 sticky top-24">
                <h3 className="font-bold text-lg mb-4 gradient-text-primary">
                  Tentang {persona.name}
                </h3>
                
                <div className="mb-6 text-center">
                  <img
                    src={persona.avatar}
                    alt={persona.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-lg"
                  />
                  <p className="text-sm text-gray-600 mb-2">{persona.description}</p>
                  {persona.personality && (
                    <p className="text-xs text-purple-600 font-semibold">{persona.personality}</p>
                  )}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100 mb-6">
                  <p className="text-sm italic text-purple-700">
                    "{persona.quote}"
                  </p>
                </div>

                <ChatTemplateSelector
                  personaId={persona.id}
                  personaName={persona.name}
                />
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
