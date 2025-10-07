// components/ApolloWrapper.tsx
'use client';
import { useMemo } from "react";
import { ApolloProvider } from '@apollo/client';
import createClient from './ApolloClient';

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const client = useMemo(()=>createClient(),[])
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
