const vscode = require('vscode');

function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.copyToDiscord', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const text = document.getText(selection);
			const language = document.languageId;

			vscode.env.clipboard.writeText("```" + language + "\n" + text + "\n```");
		}
	});

	context.subscriptions.push(disposable);
}

exports.activate = activate;