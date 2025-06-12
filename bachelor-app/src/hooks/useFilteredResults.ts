import { useEffect, useState, useMemo } from 'react';

type Field = {
  id: string;
  name: string;
  slug: string;
};

type Professor = {
  id: string;
  name: string;
  department: string;
};

type Topic = {
  id: string;
  title: string;
  field: string;
  description: string;
  professor: {
    name: string;
    department: string;
  };
  tags: string[];
}

type Tab = 'fields' | 'professors' | 'list';

type FilteredResults = {
  fields: Field[];
  professors: Professor[];
  topics: Topic[]; // ! change to lists
};

// *NOTE server-side filtering
// extend this to fetch data from your backend API
// based on the active tab, search query, page, and page size
export function useFilteredResults(
  tab: Tab,
  searchQuery: string,
  page: number,
  pageSize: number
): {
  results: FilteredResults;
  totalCount: number;
  isLoading: boolean;
} {
  const [results, setResults] = useState<FilteredResults>({
    fields: [],
    professors: [],
    topics: [],
  });
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResults = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/${tab}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchQuery,
          page,
          pageSize,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }

      const data = await response.json();
      setResults(data.results);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [tab, searchQuery, page, pageSize]);

  return { results, totalCount, isLoading };
}



// *NOTE client-side filtering
// filters already fetched data based on the active tab and query
// faster and simpler for smaller datasets
export function useFilterOnClient(
  activeTab: Tab,
  query: string,
  data: FilteredResults
) {
  const [results, setResults] = useState<Field[] | Professor[] | Topic[]>([]);

  useEffect(() => {
    const q = query.trim().toLowerCase();

    if (activeTab === 'fields') {
      const filtered = data.fields.filter(field =>
        field.name.toLowerCase().includes(q)
      );
      setResults(filtered);
    } else if (activeTab === 'professors') {
      const filtered = data.professors.filter(prof =>
        prof.name.toLowerCase().includes(q) ||
        prof.department.toLowerCase().includes(q)
      );
      setResults(filtered);
    } else if (activeTab === 'list') {
      const filtered = data.topics.filter(topic =>
        topic.title.toLowerCase().includes(q) ||
        topic.description.toLowerCase().includes(q) ||
        topic.professor?.name.toLowerCase().includes(q) ||
        topic.professor?.department.toLowerCase().includes(q) ||
        topic.tags.some(tag => tag.toLowerCase().includes(q))
      );
      setResults(filtered);
    }
  }, [activeTab, query, data.fields, data.professors, data.topics]);

  return results;
}
