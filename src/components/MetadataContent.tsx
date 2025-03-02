import { TabsContent } from "@radix-ui/react-tabs";
import { Card } from "./Card";

interface Metadata {
  createdAt: string;
  updatedAt: string;
  description: string;
  abstract: string;
  citation: string;
  keywords: string;
  publisher: string;
  identifier: string;
}

const MetadataContent = ({ data }: { data: Metadata }) => {
  return (
    <TabsContent value="metadata">
      <Card className="w-full mx-auto">
        <dl className="grid grid-cols-1 gap-6">
          <div>
            <dt className="text-sm font-medium text-gray-500">
              Project Start Date
            </dt>
            <dd className="mt-1 text-lg text-gray-900">
              {new Date(data.createdAt).toLocaleDateString()}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Last Update</dt>
            <dd className="mt-1 text-lg text-gray-900">
              {new Date(data.updatedAt).toLocaleDateString()}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">
              Project Description
            </dt>
            <dd className="mt-1 text-lg text-gray-900">{data.description}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Abstract</dt>
            <dd className="mt-1 text-lg text-gray-900">{data.abstract}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Citation</dt>
            <dd className="mt-1 text-lg text-gray-900">{data.citation}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Keywords</dt>
            <dd className="mt-1 text-lg text-gray-900">{data.keywords}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Publisher</dt>
            <dd className="mt-1 text-lg text-gray-900">{data.publisher}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Identifier</dt>
            <dd className="mt-1 text-lg text-gray-900">{data.identifier}</dd>
          </div>
        </dl>
      </Card>
    </TabsContent>
  );
};

export default MetadataContent;
