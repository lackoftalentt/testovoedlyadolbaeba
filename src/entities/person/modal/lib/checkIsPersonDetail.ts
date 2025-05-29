import type { PersonData, PersonDetail } from '../../model/types';

export function checkIsPersonDetail(person: PersonData): person is PersonDetail {
    return 'properties' in person ;
}
