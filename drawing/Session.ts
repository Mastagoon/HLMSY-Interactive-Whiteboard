export class Canvas {
  // canvas object, what should it have?
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")!
  }

  public async draw() {
    // draw the drawing
    //
  }
}

export class User {
  // user object, what should it have?
  private name: string
  private id: string
  private canDraw: boolean

  constructor(name: string, id: string, canDraw: boolean) {
    this.name = name
    this.id = id
    this.canDraw = canDraw
  }
}

export class Session {
  // room
  private _id: string
  private _canvas: Canvas
  private _users: User[]
  private host: User
  private isActive: boolean

  constructor(id: string, canvas: Canvas, host: User) {
    this._id = id
    this._canvas = canvas
    this._users = []
    this.host = host
    this.isActive = true
  }

  get id(): string {
    return this._id
  }

  public async beginSession() {
    // make a request to the server to create a new Session
    // and get the id of the new session
    // then create a new Canvas object and set it to the new session
    // then create a new User object and set it to the new session
  }

  public endSession(): void {
    // make a request to the server to end the session
    // then set the session to inactive
  }
}
