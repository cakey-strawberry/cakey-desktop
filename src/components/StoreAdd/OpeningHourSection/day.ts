type DayName = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export type Day = {
  id: number;
  name: DayName;
  isSelected: boolean;
  isDisabled: boolean;
}

export const DEFAULT_DAYS: Day[] = [
  { id: 1, name: '월', isSelected: false, isDisabled: false },
  { id: 2, name: '화', isSelected: false, isDisabled: false },
  { id: 3, name: '수', isSelected: false, isDisabled: false },
  { id: 4, name: '목', isSelected: false, isDisabled: false },
  { id: 5, name: '금', isSelected: false, isDisabled: false },
  { id: 6, name: '토', isSelected: false, isDisabled: false },
  { id: 7, name: '일', isSelected: false, isDisabled: false },
];
