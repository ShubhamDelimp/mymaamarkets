'use client';

import { usePathname, useRouter } from 'next/navigation';

const locales = [
  { label: 'En', value: 'en' },
  { label: 'Ar', value: 'ar' },
  { label: 'ES', value: 'es' },
  { label: 'Cn', value: 'zh-Hans' },
];

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;

    // Get current path after locale segment
    const pathParts = pathname.split('/');
    pathParts[1] = selectedLocale; // Replace the locale
    const newPath = pathParts.join('/');

    router.push("/");
    // router.push(newPath);
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={pathname.split('/')[1]} // get current locale
      className="text-base"
    >
      {locales.map((loc) => (
        <option className='text-sm text-black' key={loc.value} value={loc.value}>
          {loc.label}
        </option>
      ))}
    </select>
  );
}
