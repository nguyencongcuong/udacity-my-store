import * as path from 'path';

interface PathModel {
	ROOT: string;
}

const ROOT = path.resolve('./');

export const PATH: PathModel = {
	ROOT,
};
