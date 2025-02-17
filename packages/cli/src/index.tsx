import xns from 'xns';
import {previewCommand} from './preview';
import {render} from './render';
import {upgrade} from './upgrade';

export const cli = xns(async () => {
	const args = process.argv;
	const command = args[2];

	if (command === 'preview') {
		await previewCommand();
	} else if (command === 'render') {
		await render();
	} else if (command === 'upgrade') {
		await upgrade();
	} else {
		console.log(`Command ${command} not found.`);
		console.log('Available commands:');
		console.log('  preview');
		console.log('  render');
		console.log('  upgrade');
		process.exit(1);
	}
});

export * from './render';
