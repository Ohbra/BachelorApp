import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getProfessors } from '../../backend/actions/professors/get-professors';
import { prisma } from '../../backend/prisma/prisma';

describe('getProfessors', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  it('should return formatted professors on success', async () => {
    vi.spyOn(prisma.supervisor, 'findMany').mockResolvedValue([
      {
        supervisor_id: '1',
        user_parent: {
          name: 'Alice',
          surname: 'Smith',
          faculty: {
            faculty_name: 'Informatics',
          },
        },
      },
      {
        supervisor_id: '2',
        user_parent: {
          name: 'Bob',
          surname: 'Brown',
          faculty: null,
        },
      },
    ] as any); // use `as any` only in tests if types get tricky due to mock

    const result = await getProfessors();

    expect(result.success).toBe(true);
    expect(result.professors).toEqual([
      { id: '1', name: 'Alice Smith', department: 'Informatics' },
      { id: '2', name: 'Bob Brown', department: 'Not specified' },
    ]);
  });

  it('should return fallback on error', async () => {
    vi.spyOn(prisma.supervisor, 'findMany').mockRejectedValue(new Error('DB error'));

    const result = await getProfessors();

    expect(result.success).toBe(false);
    expect(result.message).toBe('Failed to fetch professors');
    expect(result.professors).toEqual([]);
  });
});
