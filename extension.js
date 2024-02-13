const vscode = require('vscode');

function activate(context) {
	let disposable = vscode.commands.registerCommand('copy-to-discord.copyToDiscord', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const text = document.getText(selection);
			const language = document.languageId;
			const gravis = "```";

			vscode.env.clipboard.writeText(`${gravis}${language}\n${text}\n${gravis}`);
		}
	});

	context.subscriptions.push(disposable);
}

exports.activate = activate;