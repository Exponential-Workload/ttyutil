import fs from 'fs-extra'
// HTTP Abstraction Class
export default class HTTP {
  public static async GetRaw(url: string): Promise<Response> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
    }
    return response
  }
  public static async Get(url: string): Promise<string> {
    const v = await this.GetRaw(url)
    return await v.text()
  }
  public static async GetJSON(url: string): Promise<Record<any, any> | any[]> {
    const v = await this.GetRaw(url)
    return await v.json()
  }
  public static async GetBuffer(url: string): Promise<Buffer> {
    const v = await this.GetRaw(url)
    return Buffer.from(await v.arrayBuffer())
  }
  public static async Download(url: string, path: string): Promise<void> {
    fs.writeFileSync(path, await this.GetBuffer(url))
  }
}
