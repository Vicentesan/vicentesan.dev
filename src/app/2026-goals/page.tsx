'use client';

import { formatDistanceToNow } from 'date-fns';
import { useMemo } from 'react';

import { BackButton } from '@/components/back-button';
import { Checkbox } from '@/components/checkbox';
import { GOALS_2026 } from '@/constants/goals';
import { cn } from '@/lib/utils';

export default function GoalsPage() {
  const lastAchievedAt = useMemo(() => {
    let latest: Date | undefined;

    for (const goal of GOALS_2026) {
      if (goal.achievedAt && (!latest || goal.achievedAt > latest)) {
        latest = goal.achievedAt;
      }
    }

    return latest;
  }, []);

  return (
    <main className="relative mx-auto flex w-full max-w-xl flex-col items-start justify-center gap-12 py-20 text-[13px] text-neutral-300 max-sm:px-10">
      <BackButton />

      <div className="flex flex-col gap-2">
        <h1 className="text-white uppercase">2026 Goals</h1>
        <p className="text-xs uppercase">a list of things i wanna do before the end of 2026</p>
        <p className="text-muted-foreground text-xs uppercase">
          Updated:{' '}
          {formatDistanceToNow(lastAchievedAt ?? new Date('2025-12-28T14:41:00'), {
            addSuffix: true
          })}
        </p>
      </div>

      <article className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <h2 className="text-white uppercase">2026</h2>
          <ul className="flex flex-col gap-4">
            {GOALS_2026.map((item) => (
              <li key={item.label} className="flex items-center justify-start gap-2">
                <Checkbox disabled checked={!!item.achievedAt} className="size-4 shrink-0" />

                <span
                  className={cn('shrink-0 uppercase', {
                    'shrink-0 uppercase line-through opacity-50': item.achievedAt
                  })}
                >
                  {item.label}
                </span>

                {item.achievedAt && (
                  <span className="shrink-0 text-muted-foreground text-xs uppercase">
                    ({formatDistanceToNow(item.achievedAt)} ago)
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
