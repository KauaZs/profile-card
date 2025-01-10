export interface IUserData {
    _id: string
    profileOptions: {
      displayName: string,
      aboutme: string,
      banner: string,
      avatar: string,
      effectSpace: boolean,
      colorCard: string,
      colorBackground: string,
      socials: {
        discord: string,
        github: string
      },
      stats: {
        views: number
      }
    }
  }