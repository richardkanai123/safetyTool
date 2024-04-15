'use client';
import useSwr, { Fetcher } from 'swr';

export default function Trial() {
  const fetcher: Fetcher<any, string> = (...args) =>
    fetch(...args).then((res) => res.json());

  const { data, isLoading, error } = useSwr('/api/incidences', fetcher);
  if (error) return <p>error</p>;
  if (isLoading) return <p> Loading ... </p>;

  return <p>Connected to db</p>;
}
