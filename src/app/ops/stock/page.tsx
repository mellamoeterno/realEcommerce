 'use client'

import { useCallback, useEffect, useMemo, useState } from "react";

type Severity = 'critical' | 'high' | 'medium' | 'low';

type StockIssue = {
    id: string;
    productID: string;
    sku: string;
    productName: string;
    type: string;
    severity: Severity;
    message: string;
    details: Record<string, unknown>;
    detectedAt: string;
};

type ApiResponse = {
    total: number;
    counts: Partial<Record<Severity, number>>;
    issues: StockIssue[];
};

const SEVERITY_ORDER: Severity[] = ['critical', 'high', 'medium', 'low'];

const BADGE: Record<Severity, string> = {
    critical: 'bg-red-50 text-red-700 ring-red-600/20',
    high: 'bg-orange-50 text-orange-700 ring-orange-600/20',
    medium: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    low: 'bg-slate-50 text-slate-600 ring-slate-500/20',
};

const API_URL = process.env.NEXT_PUBLIC_OPS_API_URL ?? 'http://localhost:4000'

export default function StockInvestigationPage() {
  const [ data, setData] = useState<ApiResponse | null>(null);
  const [ loading, setLoading] = useState(true);
  const [ error, setError ] = useState<string | null>(null);
  const [ filter, setFilter ] = useState<Severity | 'all'>('all');

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
        const res = await fetch(`${API_URL}/api/stock/issues`);
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setData(await res.json());
    } catch(err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
        setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const visible = useMemo(() => {
    if (!data) return [];
    return filter === 'all' ? data.issues : data.issues.filter((i) => i.severity === filter);
  }, [data, filter]);

  return (
    <main>
        <header>
            <div>
            <h1>stock investigation</h1>
            <p>automated checks across inventory. {data?.total ?? 0} open issues</p>
            </div>
            <button
            onClick={() => void load()}
            disabled={loading}
            >
                {loading ? 'scanning' : 're-scan'}
            </button>
        </header>

        <div>
            <FilterChip active={filter === 'all'} onClick={() => setFilter('all')}>
            All ({data?.total ?? 0})
            </FilterChip>
            {SEVERITY_ORDER.map((s) => (
                <FilterChip key={s} active={filter === s} onClick={() => setFilter(s)}>
                    {s} ({data?.counts?.[s] ?? 0})
                </FilterChip>
            ))}
        </div>

        {error && (
            <div>
                could not Reacth Ops-Api: {error}
            </div>
        )}

        {!error && !loading && visible.length === 0  && (
            <p>No issues for this filter</p>
        )}

    {/*     <ul>
            {visible.map((issue) => (
                <li key={issue.id>
                    <div>
                    <span className={`rounded-full ${BADGE[issue.severity]}`}
                    >
                        {issue.severity}
                    </span>
                    <span>{issue.type}</span>
                    </div>
                    <p>{issue.message}</p>
                    <p>{issue.productName} - {issue.sku}
                    </p>
                    </li>
            ))}
        </ul> */}
    </main>
  )
}