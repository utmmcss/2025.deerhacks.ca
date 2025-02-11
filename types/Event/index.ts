import { ScheduleProps } from '@/components/Shared/ScheduleGrid/helper'

export type EventListResp = {
  data: RespEvent[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
  parsedData: ParsedEventData
}

export type ParsedEventData = { [date: string]: ScheduleProps }

export type RespEvent = {
  id: number
  attributes: {
    title: string
    description: string
    location?: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
    startTime: string
    endTime?: string | null
    important: boolean
    host: EventHosts
    presenter?: string | null
    type: EventTypes
  }
}

export type Event = {
  id: number
  attributes: {
    title: string
    description: string
    location?: string | null
    startTime: Date
    endTime: Date
    important: boolean
    host: EventHosts
    presenter?: string | null
    type: EventTypes
    /* used only when displaying event details in modal */
    actualEventTimes?: {
      startTime: Date
      endTime?: Date | null
    }
  }
}

export type EventHosts = (typeof eventHosts)[number]
export const eventHosts = [
  'deerhacks',
  'mcss',
  'utmRobotics',
  'esports',
  'gdsc',
  'cssc',
  'utmsam',
  'mlh',
  'guidewire',
  'inworldAi',
  'uber',
  'amd',
  'thirstea',
] as const

export type EventTypes = (typeof eventTypes)[number]
export const eventTypes = [
  'activity',
  'workshop',
  'competition',
  'logistics',
  'food',
  'other',
] as const

export const eventListStatic: EventListResp = {
  parsedData: {},
  data: [
    {
      id: 1,
      attributes: {
        createdAt: '2024-01-28T19:33:38.672Z',
        updatedAt: '2024-02-12T16:51:39.145Z',
        publishedAt: '2024-01-30T01:09:16.317Z',
        title: 'Registration',
        description:
          '',
        location: 'DH Lobby',
        startTime: '2025-02-14T23:30:00.00Z',
        endTime: '2025-02-15T01:00:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'logistics',
        presenter: null,
      },
    },
    {
      id: 65,
      attributes: {
        createdAt: '2024-02-16T21:32:14.265Z',
        updatedAt: '2024-02-20T22:45:12.199Z',
        publishedAt: '2024-02-16T21:32:17.109Z',
        title: 'Opening Ceremony',
        description: '',
        location: 'MN 1210',
        startTime: '2025-02-15T01:00:00.000Z',
        endTime: '2025-02-15T01:30:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'logistics',
        presenter: null,
      },
    },
    {
      id: 2,
      attributes: {
        createdAt: '2024-01-28T22:06:05.466Z',
        updatedAt: '2024-02-16T22:51:39.501Z',
        publishedAt: '2024-01-30T01:09:16.317Z',
        title: 'Dinner',
        description:
          '',
        location: 'DH Cafe',
        startTime: '2025-02-15T01:30:00.000Z',
        endTime: '2025-02-15T02:30:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'food',
        presenter: null,
      },
    },
    {
      id: 7,
      attributes: {
        createdAt: '2024-02-11T01:18:34.433Z',
        updatedAt: '2024-02-16T05:42:37.856Z',
        publishedAt: '2024-02-11T01:28:07.983Z',
        title: 'Hacking Begins',
        description:
          '',
        location: null,
        startTime: '2025-02-15T02:30:00.000Z',
        endTime: null,
        important: true,
        host: 'deerhacks',
        type: 'logistics',
        presenter: null,
      },
    },
    {
      id: 6,
      attributes: {
        createdAt: '2024-02-11T01:15:58.763Z',
        updatedAt: '2024-02-20T22:45:37.476Z',
        publishedAt: '2024-02-11T01:28:01.872Z',
        title: 'Speed Eating Contest',
        description:
          '',
        location: 'DH Cafe',
        startTime: '2025-02-15T03:00:00.000Z',
        endTime: '2025-02-15T04:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'competition',
        presenter: null,
      },
    },
    {
      id: 8,
      attributes: {
        createdAt: '2024-02-11T01:20:01.630Z',
        updatedAt: '2024-02-15T20:56:14.253Z',
        publishedAt: '2024-02-11T01:28:17.277Z',
        title: 'Midnight Trivia',
        description: '',
        location: "DH 2010",
        startTime: '2025-02-15T05:00:00.000Z',
        endTime: '2025-02-15T06:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'activity',
        presenter: null,
      },
    },
    {
      id: 57,
      attributes: {
        createdAt: '2024-02-15T20:54:32.096Z',
        updatedAt: '2024-02-17T01:03:01.664Z',
        publishedAt: '2024-02-16T03:08:54.155Z',
        title: 'Breakfast',
        description: '',
        location: 'DH Cafe',
        startTime: '2025-02-15T13:00:00.000Z',
        endTime: '2025-02-15T15:00:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'food',
        presenter: null,
      },
    },
    {
      id: 18,
      attributes: {
        createdAt: '2024-02-11T01:57:27.794Z',
        updatedAt: '2024-02-20T22:46:05.809Z',
        publishedAt: '2024-02-11T01:57:28.572Z',
        title: 'Touch Grass 101',
        description:
          '',
        location: 'Outside MN',
        startTime: '2025-02-15T14:30:00.000Z',
        endTime: '2025-02-15T15:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'activity',
        presenter: null,
      },
    },
    {
      id: 9,
      attributes: {
        createdAt: '2024-02-11T01:21:00.746Z',
        updatedAt: '2024-02-12T00:39:51.025Z',
        publishedAt: '2024-02-11T01:28:23.105Z',
        title: 'NAND to Tetris',
        description:
          '',
        location: 'DH 2010',
        startTime: '2025-02-15T15:00:00.000Z',
        endTime: '2025-02-15T16:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'workshop',
        presenter: 'Kalash',
      },
    },
    {
      id: 51,
      attributes: {
        createdAt: '2024-02-13T11:02:51.080Z',
        updatedAt: '2024-02-16T05:44:24.948Z',
        publishedAt: '2024-02-13T11:02:52.462Z',
        title: 'Intro to OpenCV & MediaPipe',
        description:
          '',
        location: 'DH 2020',
        startTime: '2025-02-15T16:00:00.000Z',
        endTime: '2025-02-15T17:00:00.000Z',
        important: false,
        host: 'gdsc',
        type: 'workshop',
        presenter: "Ben",
      },
    },
    {
      id: 10,
      attributes: {
        createdAt: '2024-02-11T01:23:13.707Z',
        updatedAt: '2024-02-12T01:57:52.512Z',
        publishedAt: '2024-02-11T01:28:35.066Z',
        title: 'Lunch',
        description:
          '',
        location: 'DH Cafe',
        startTime: '2025-02-15T17:00:00.000Z',
        endTime: '2025-02-15T19:00:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'food',
        presenter: null,
      },
    },
    {
      id: 11,
      attributes: {
        createdAt: '2024-02-11T01:24:14.241Z',
        updatedAt: '2024-02-12T16:56:57.422Z',
        publishedAt: '2024-02-11T01:28:42.370Z',
        title: 'Come play Video Games!',
        description:
          "",
        location: 'DH 2020',
        startTime: '2025-02-15T19:00:00.000Z',
        endTime: '2025-02-15T21:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'activity',
        presenter: null,
      },
    },
    {
      id: 12,
      attributes: {
        createdAt: '2024-02-11T01:27:34.581Z',
        updatedAt: '2024-02-20T22:38:27.816Z',
        publishedAt: '2024-02-11T01:28:45.739Z',
        title: 'Snowball Fight',
        description: "",
        location: 'DH',
        startTime: '2025-02-15T19:00:00.000Z',
        endTime: '2025-02-15T20:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'activity',
        presenter: null,
      },
    },
    {
      id: 13,
      attributes: {
        createdAt: '2024-02-11T01:33:39.199Z',
        updatedAt: '2024-02-12T18:39:41.057Z',
        publishedAt: '2024-02-11T01:33:40.799Z',
        title: 'Using Notion to Think Less',
        description:
          '',
        location: 'DH 2010',
        startTime: '2025-02-15T20:00:00.000Z',
        endTime: '2025-02-15T21:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'workshop',
        presenter: "Ivan",
      },
    },
    {
      id: 15,
      attributes: {
        createdAt: '2024-02-11T01:38:46.477Z',
        updatedAt: '2024-02-12T07:48:34.005Z',
        publishedAt: '2024-02-11T01:38:47.399Z',
        title: 'Stocks 101',
        description:
          '',
        location: 'DH 2010',
        startTime: '2025-02-15T21:00:00.000Z',
        endTime: '2025-02-15T22:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'workshop',
        presenter: "Nina",
      },
    },
    {
      id: 16,
      attributes: {
        createdAt: '2024-02-11T01:41:22.360Z',
        updatedAt: '2024-02-20T22:50:52.086Z',
        publishedAt: '2024-02-11T01:41:23.331Z',
        title: 'End-to-End Deep Learning Pipeline',
        description: '',
        location: 'DH 2020',
        startTime: '2025-02-15T21:00:00.000Z',
        endTime: '2025-02-15T22:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'workshop',
        presenter: "Chau",
      },
    },
    {
      id: 5,
      attributes: {
        createdAt: '2024-02-11T01:10:10.114Z',
        updatedAt: '2024-02-17T16:34:46.227Z',
        publishedAt: '2024-02-11T01:10:13.413Z',
        title: 'Web App Vulnerabilities',
        description:
          '',
        location: 'DH 2010',
        startTime: '2025-02-15T22:00:00.000Z',
        endTime: '2025-02-15T23:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'workshop',
        presenter: 'Shiva',
      },
    },
    {
      id: 55,
      attributes: {
        createdAt: '2024-02-15T17:01:47.474Z',
        updatedAt: '2024-02-16T03:21:54.747Z',
        publishedAt: '2024-02-15T20:21:43.088Z',
        title: 'Come Play Poker!!',
        description:
          "",
        location: 'DH Cafe',
        startTime: '2025-02-15T22:00:00.000Z',
        endTime: '2025-02-16T01:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'activity',
        presenter: null,
      },
    },
    {
      id: 17,
      attributes: {
        createdAt: '2024-02-11T01:43:08.289Z',
        updatedAt: '2024-02-12T16:57:58.272Z',
        publishedAt: '2024-02-11T01:43:09.215Z',
        title: 'Networking & Growth, Confidence',
        description:
          '',
        location: 'DH 2020',
        startTime: '2025-02-15T22:00:00.000Z',
        endTime: '2025-02-15T23:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'workshop',
        presenter: 'Shaiza',
      },
    },
    {
      id: 62,
      attributes: {
        createdAt: '2024-02-16T15:48:00.231Z',
        updatedAt: '2024-02-16T16:44:17.120Z',
        publishedAt: '2024-02-16T15:48:11.073Z',
        title: 'Henrik Reacts',
        description:
          '',
        location: 'DH 2020',
        startTime: '2025-02-15T23:00:00.000Z',
        endTime: '2025-02-16T00:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'workshop',
        presenter: "Henrik",
      },
    },
    {
      id: 20,
      attributes: {
        createdAt: '2024-02-11T02:00:33.453Z',
        updatedAt: '2024-02-17T19:13:19.797Z',
        publishedAt: '2024-02-11T02:00:38.371Z',
        title: 'Dinner',
        description:
          "",
        location: 'DH Cafe',
        startTime: '2025-02-16T00:00:00.000Z',
        endTime: '2025-02-16T02:00:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'food',
        presenter: null,
      },
    },
    {
      id: 23,
      attributes: {
        createdAt: '2024-02-11T02:04:24.579Z',
        updatedAt: '2024-02-16T16:44:26.800Z',
        publishedAt: '2024-02-11T02:04:25.602Z',
        title: 'Intro to Nvidia & CUDA',
        description:
          '',
        location: 'DH 2010',
        startTime: '2025-02-16T01:00:00.000Z',
        endTime: '2025-02-16T02:00:00.000Z',
        important: true,
        host: 'mcss',
        type: 'workshop',
        presenter: "Mack",
      },
    },
    {
      id: 21,
      attributes: {
        createdAt: '2024-02-11T02:01:50.097Z',
        updatedAt: '2024-02-17T16:30:30.923Z',
        publishedAt: '2024-02-11T02:01:51.025Z',
        title: 'Karaoke Night',
        description:
          '',
        location: 'DH 2010',
        startTime: '2025-02-16T03:00:00.000Z',
        endTime: '2025-02-16T04:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'activity',
        presenter: null,
      },
    },
    {
      id: 56,
      attributes: {
        createdAt: '2024-02-15T20:09:45.738Z',
        updatedAt: '2024-02-20T22:43:06.062Z',
        publishedAt: '2024-02-15T20:09:52.399Z',
        title: 'Spicey Noodle Challenge',
        description:
          "",
        location: 'DH Cafe',
        startTime: '2025-02-16T05:00:00.000Z',
        endTime: '2025-02-16T06:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'competition',
        presenter: null,
      },
    },
    {
      id: 60,
      attributes: {
        createdAt: '2024-02-16T03:55:13.560Z',
        updatedAt: '2024-02-17T01:38:19.692Z',
        publishedAt: '2024-02-16T03:55:18.338Z',
        title: 'Breakfast',
        description:
          '',
        location: 'DH Cafe',
        startTime: '2025-02-16T13:00:00.000Z',
        endTime: '2025-02-16T15:00:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'food',
        presenter: null,
      },
    },
    {
      id: 22,
      attributes: {
        createdAt: '2024-02-11T02:02:52.644Z',
        updatedAt: '2024-02-17T13:38:06.907Z',
        publishedAt: '2024-02-11T02:02:54.178Z',
        title: 'Judging',
        description:
          "",
        location: '',
        startTime: '2025-02-16T15:00:00.000Z',
        endTime: '2025-02-16T17:00:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'logistics',
        presenter: null,
      },
    },
    {
      id: 66,
      attributes: {
        createdAt: '2024-02-17T01:58:39.908Z',
        updatedAt: '2024-02-20T22:43:18.163Z',
        publishedAt: '2024-02-17T01:58:43.608Z',
        title: 'Boardgame Cafe with EGO',
        description: '',
        location: 'DH Cafe',
        startTime: '2025-02-16T15:00:00.000Z',
        endTime: '2025-02-16T17:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'activity',
        presenter: null,
      },
    },
    {
      id: 24,
      attributes: {
        createdAt: '2024-02-11T02:05:43.258Z',
        updatedAt: '2024-02-17T20:04:12.665Z',
        publishedAt: '2024-02-11T02:05:44.139Z',
        title: 'Watching the Prestige',
        description:
          '',
        location: 'MN 1210',
        startTime: '2025-02-16T15:00:00.000Z',
        endTime: '2025-02-16T17:00:00.000Z',
        important: false,
        host: 'mcss',
        type: 'activity',
        presenter: null,
      },
    },
    {
      id: 3,
      attributes: {
        createdAt: '2024-01-28T22:29:48.247Z',
        updatedAt: '2024-02-20T22:30:22.323Z',
        publishedAt: '2024-01-30T01:06:44.745Z',
        title: 'Closing Ceremony',
        description: '',
        location: '',
        startTime: '2025-02-16T18:00:00.000Z',
        endTime: '2025-02-16T19:00:00.000Z',
        important: true,
        host: 'deerhacks',
        type: 'logistics',
        presenter: null,
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 100,
      pageCount: 1,
      total: 50,
    },
  },
}
