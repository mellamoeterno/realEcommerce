'use client'

import {useCallback, useEffect, useMemo, useState} from "react";

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
//....