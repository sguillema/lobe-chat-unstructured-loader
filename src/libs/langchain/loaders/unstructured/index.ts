import { UnstructuredLoader as Loader } from '@langchain/community/document_loaders/fs/unstructured';

import { knowledgeEnv } from '@/config/knowledge';


export const UnstructuredLoader = async (fileBlob: Blob, fileName: string) => {
    console.log(knowledgeEnv.UNSTRUCTURED_API_KEY, knowledgeEnv.UNSTRUCTURED_SERVER_URL)
    const loader = new Loader(
        { 
            buffer: Buffer.from(await fileBlob.arrayBuffer()),
            fileName: fileName 
        }, { 
            apiKey: knowledgeEnv.UNSTRUCTURED_API_KEY,
            apiUrl: knowledgeEnv.UNSTRUCTURED_SERVER_URL,
            strategy: 'auto',
        }
    );

    return await loader.load();
};
