export class Member {
  constructor(
    public readonly avatar: string,
    public readonly title: string,
    public readonly subtitle: string,
    public readonly email: string,
    public readonly phone: string
  ) {}
}

export class OurTeam {
  constructor(
    public readonly title: string,
    public readonly members: Array<Member>
  ) {}
}
