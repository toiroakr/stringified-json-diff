import {Command, flags} from '@oclif/command'
// @ts-ignore
import {diffString} from 'json-diff'

class StringifiedJsonDiff extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'stringified_json_a'}, {name: 'stringified_json_b'}]

  async run() {
    const {args} = this.parse(StringifiedJsonDiff)

    if (!args.stringified_json_a || !args.stringified_json_b) {
      this.error('USAGE: $ sjd [STRINGIFIED_JSON_A] [STRINGIFIED_JSON_B]')
    }

    let name = ''
    const jsons: string[] = []
    try {
      ['stringified_json_a', 'stringified_json_b'].forEach(jsonName => {
        name = jsonName
        jsons.push(JSON.parse(args[jsonName]))
      })
      this.log(diffString(jsons[0], jsons[1]))
    } catch (e) {
      this.error(`In parsing ${ name }\n${ e.message }`)
    }
  }
}

export = StringifiedJsonDiff
