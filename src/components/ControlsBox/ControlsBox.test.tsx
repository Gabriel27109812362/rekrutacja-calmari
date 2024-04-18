import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import ControlsBox from './ControlsBox';

const profilesTestData = {
  entities: {
    '9EB86248-3981-6637-59C4-37C7AC6EE541': {
      id: '9EB86248-3981-6637-59C4-37C7AC6EE541',
      name: 'Deborah Cherry',
      job: 'Lobortis Augue Scelerisque Incorporated',
      favourite: true,
      avg: 0,
      count: 0,
      actualRank: 0,
      initials: 'DC',
    },
    'BE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0': {
      id: 'BE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0',
      name: 'Moses Knapp',
      job: 'Ipsum Cursus Institute',
      favourite: true,
      avg: 0,
      count: 0,
      actualRank: 0,
      initials: 'MK',
    },
  },
  ids: [
    '9EB86248-3981-6637-59C4-37C7AC6EE541',
    'BE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0',
  ],
};

describe('ControlBox', () => {
  test('should show profiles amount with AllSpecialists Tab', () => {
    renderWithProviders(<ControlsBox />, {
      preloadedState: {
        profiles: {
          ...profilesTestData,
          allSpecialists: true,
          searchQuery: '',
        },
      },
    });

    expect(screen.getByText('All specialists (2)')).toBeDefined();
    expect(screen.queryByText('My Specialists (2)')).toBeNull();
  });

  test('should show profiles amount with MySpecialists Tab', () => {
    renderWithProviders(<ControlsBox />, {
      preloadedState: {
        profiles: {
          ...profilesTestData,
          allSpecialists: false,
          searchQuery: '',
        },
      },
    });

    expect(screen.queryByText('All specialists (2)')).toBeNull();
    expect(screen.getByText('My Specialists (2)')).toBeDefined();
  });

  test('should show only amount of favourites in MySpecialists Tab', () => {
    renderWithProviders(<ControlsBox />, {
      preloadedState: {
        profiles: {
          entities: {
            ...profilesTestData.entities,
            '8EB86248-3981-6637-59C4-37C7AC6EE541': {
              id: '9EB86248-3981-6637-59C4-37C7AC6EE541',
              name: 'Deborah Cherry',
              job: 'Lobortis Augue Scelerisque Incorporated',
              favourite: true,
              avg: 0,
              count: 0,
              actualRank: 0,
              initials: 'DC',
            },
            'EE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0': {
              id: 'BE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0',
              name: 'Moses Knapp',
              job: 'Ipsum Cursus Institute',
              favourite: false,
              avg: 0,
              count: 0,
              actualRank: 0,
              initials: 'MK',
            },
          },
          ids: [
            ...profilesTestData.ids,
            '8EB86248-3981-6637-59C4-37C7AC6EE541',
            'EE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0',
          ],

          allSpecialists: false,
          searchQuery: '',
        },
      },
    });

    expect(screen.queryByText('All specialists (4)')).toBeNull();
    expect(screen.getByText('My Specialists (3)')).toBeDefined();
  });

  test('should show only amount of favourites in MySpecialists Tab', () => {
    renderWithProviders(<ControlsBox />, {
      preloadedState: {
        profiles: {
          entities: {
            ...profilesTestData.entities,
            '8EB86248-3981-6637-59C4-37C7AC6EE541': {
              id: '9EB86248-3981-6637-59C4-37C7AC6EE541',
              name: 'Deborah Cherry',
              job: 'Lobortis Augue Scelerisque Incorporated',
              favourite: true,
              avg: 0,
              count: 0,
              actualRank: 0,
              initials: 'DC',
            },
            'EE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0': {
              id: 'BE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0',
              name: 'Moses Knapp',
              job: 'Ipsum Cursus Institute',
              favourite: false,
              avg: 0,
              count: 0,
              actualRank: 0,
              initials: 'MK',
            },
          },
          ids: [
            ...profilesTestData.ids,
            '8EB86248-3981-6637-59C4-37C7AC6EE541',
            'EE60A7B1-D78D-F78D-6CE4-6B2BEB1E6BA0',
          ],

          allSpecialists: true,
          searchQuery: '',
        },
      },
    });

    expect(screen.queryByText('All specialists (4)')).toBeDefined();
    expect(screen.queryByText('My Specialists (3)')).toBeNull();
  });
});
