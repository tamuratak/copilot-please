import * as vscode from 'vscode'


class Extension {

    registerCommands() {
        return [
            ...this.registerTerminalAndSideBarCommand()
        ]
    }

    private registerTerminalAndSideBarCommand() {
        return [
            vscode.commands.registerCommand('copilot-please.disableInlineSuggest', () => {
                const configuration = vscode.workspace.getConfiguration('editor')
                configuration.update('inlineSuggest.enabled', false)
                setTimeout(() => {  
                    configuration.update('inlineSuggest.enabled', true)
                }, 10000)
            })
        ]
    }

}

export function activate(context: vscode.ExtensionContext) {
    const extension = new Extension()
    context.subscriptions.push(...extension.registerCommands())
}
