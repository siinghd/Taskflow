const tasks = [
    {
        'completed': false,
        'page': 'Homepage',
        'section': 'Section below video hero',
        'type': 'text',
        'texts': {
            'text1': {
                'title': 'Title part 1',
                'characters': 100,
            },
            'text2': {
                'title': 'Subtitle',
                'characters': undefined,
            },
            'text3': {
                'title': 'Main text',
                'characters': 500,
            }
        },
        'images': {

        },
    },
    {
        'completed': true,
        'page': 'Homepage',
        'section': 'Section below partners names',
        'type': 'text + img',
        'texts': {
            'text1': {
                'title': 'Title part 1',
                'characters': undefined,
            },
            'text2': {
                'title': 'Text part 1',
                'characters': 300,
            },
            'text3': {
                'title': 'Title part 2',
                'characters': 100,
            },
            'text4': {
                'title': 'Text part 2',
                'characters': 300,
            },
        },
        'images': {
            'image1': {
                'title': 'Image part 1',
                'size_mb': 2,
                'dimension_x': 1500,
                'dimension_y': 1250,
                'file': ['png'],
            },
            'image2': {
                'title': 'Image part 2',
                'size_mb': undefined,
                'dimension_x': 1080,
                'dimension_y': 720,
                'file': ['png', 'jpg', 'webp'],
            },
        },
    }
]

export default tasks;