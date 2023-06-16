import { TaskInterface } from "@/lib/utils";

const tasks: TaskInterface[] = [
    {
        'id': 1,
        'completed': false,
        'page': 'Homepage',
        'section': 'Section below video hero',
        'type': 'text',
        'texts': [
            {
                'id': 1,
                'title': 'Title part 1',
                'value': '',
                'characters': 100,
            },
            {
                'id': 2,
                'title': 'Subtitle',
                'value': '',
                'characters': undefined,
            },
            {
                'id': 3,
                'title': 'Main text',
                'value': '',
                'characters': 500,
            }
        ],
        'images': [

        ],
    },
    {
        'id':  2,
        'completed': true,
        'page': 'Homepage',
        'section': 'Section below partners names',
        'type': 'text + img',
        'texts': [
            {
                'id': 1,
                'title': 'Title part 1',
                'value': '',                
                'characters': undefined,
            },
            {
                'id': 2,
                'title': 'Text part 1',
                'value': '',
                'characters': 300,
            },
            {
                'id': 3,
                'title': 'Title part 2',
                'value': '',
                'characters': 100,
            },
            {
                'id': 4,
                'title': 'Text part 2',
                'value': '',
                'characters': 300,
            },
        ],
        'images': [
            {
                'id': 1,
                'title': 'Image part 1',
                'size_mb': 2,
                'dimension_x': 1500,
                'dimension_y': 1250,
                'file': ['png'],
                'value': undefined,
            },
            {
                'id': 2,
                'title': 'Image part 2',
                'size_mb': undefined,
                'dimension_x': 1080,
                'dimension_y': 720,
                'file': ['png', 'jpg', 'webp'],
                'value': undefined,
            },
        ],
    }
]

export default tasks;