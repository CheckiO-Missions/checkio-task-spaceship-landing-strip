"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

TESTS = {
    "Basics": [
        {
            "input": ["G"],
            "answer": 1,
            "explanation": [
                [0, 0, 1, 1]
            ]
        },
        {
            "input": [
                "GS",
                "GS"],
            "answer": 4,
            "explanation": [
                [0, 0, 1, 1],
                [1, 0, 1, 2],
                [0, 0, 2, 2]
            ]
        },
        {
            "input": [
                "GT",
                "GG"],
            "answer": 2,
            "explanation": [
                [0, 0, 1, 1],
                [1, 0, 1, 2]
            ]
        },
        {
            "input": [
                "GGTGG",
                "TGGGG",
                "GSSGT",
                "GGGGT",
                "GWGGG",
                "RGTRT",
                "RTGWT",
                "WTWGR"],
            "answer": 9,
            "explanation": [
                [0, 0, 1, 2],
                [0, 3, 2, 2],
                [0, 3, 5, 1],
                [1, 2, 4, 2],
                [1, 1, 3, 3]
            ]
        },
        {
            "input": [
                "GSWGG",
                "SGRST",
                "WGSRS",
                "RSSST"],
            "answer": 4,
            "explanation": [
                [0, 0, 1, 1],
                [0, 0, 1, 2],
                [0, 0, 2, 2]
            ]
        },
        {
            "input": [
                "GSWGG",
                "SGRST",
                "WGSRS",
                "RSSST",
                "RGTWW"],
            "answer": 5,
            "explanation": [
                [0, 0, 1, 1],
                [0, 0, 2, 2],
                [0, 1, 5, 1]
            ]
        },
        {
            "input": [
                "GSGSS",
                "GWSRS",
                "SWSTG",
                "GGSGG",
                "GGSGG"],
            "answer": 10,
            "explanation": [
                [0, 0, 1, 1],
                [0, 0, 1, 2],
                [0, 0, 1, 5],
                [3, 0, 2, 5]
            ]
        },
        {
            "input": [
                "GWGWS",
                "RSRGR",
                "TTTTT",
                "TGGGT",
                "TGGGT"],
            "answer": 6,
            "explanation": [
                [0, 0, 1, 1],
                [3, 1, 2, 1],
                [3, 1, 1, 3],
                [3, 1, 2, 3]
            ]
        },
        {
            "input": [
                "GGGGGG",
                "GGGGGG",
                "SSSSSS",
                "SSSSSS",
                "GGGGGG",
                "GGGGGG"
            ],
            "answer": 36,
            "explanation": [
                [0, 0, 1, 1],
                [0, 0, 1, 6],
                [0, 0, 6, 6]
            ]
        },
        {
            "input": [
                "RRRRRRR",
                "RGGGGGR",
                "RGSSSGR",
                "RGSSSGR",
                "RGSSSGR",
                "RGGGGGR",
                "RRRRRRR"
            ],
            "answer": 25,
            "explanation": [
                [1, 1, 1, 1],
                [1, 1, 1, 5],
                [1, 1, 5, 5]
            ]
        }
    ],
    "Extra": [
        {
            "input": ["S"],
            "answer": 1,
            "explanation": [
                [0, 0, 1, 1]
            ]
        },
        {
            "input": [
                "SS",
                "SG"],
            "answer": 4,
            "explanation": [
                [0, 0, 1, 1],
                [1, 0, 1, 2],
                [0, 0, 2, 2]
            ]
        },
        {
            "input": [
                "GS",
                "RG"],
            "answer": 2,
            "explanation": [
                [0, 0, 1, 1],
                [0, 0, 1, 2]
            ]
        },
        {
            "input": [
                "SSSRG",
                "RRGSG",
                "GWGSG",
                "GWGSG",
                "GSWRR",
                "GSTRT",
                "SGTWT",
                "SGTGR"],
            "answer": 9,
            "explanation": [
                [0, 0, 1, 1],
                [0, 0, 1, 3],
                [0, 4, 4, 1],
                [4, 0, 4, 2],
                [1, 2, 3, 3]
            ]
        },
        {
            "input": [
                "TSGGT",
                "SGSTT",
                "WRRRR",
                "RSSST"],
            "answer": 4,
            "explanation": [
                [0, 1, 1, 1],
                [0, 1, 1, 3],
                [0, 1, 2, 2]
            ]
        },
        {
            "input": [
                "RSRGG",
                "RGRST",
                "GGSGS",
                "RSRTT",
                "RWRWW"],
            "answer": 5,
            "explanation": [
                [0, 1, 1, 1],
                [0, 1, 4, 1],
                [2, 0, 1, 5]
            ]
        },
        {
            "input": [
                "GSGSS",
                "GWSRS",
                "GGSGG",
                "GGSGG",
                "SWSTG"
            ],
            "answer": 10,
            "explanation": [
                [0, 0, 1, 1],
                [0, 0, 4, 1],
                [0, 0, 1, 5],
                [2, 0, 2, 5]
            ]
        },
        {
            "input": [
                "WGWSW",
                "GRGRG",
                "TSSRT",
                "TGGRT",
                "TGGRT"],
            "answer": 6,
            "explanation": [
                [1, 0, 1, 1],
                [2, 1, 1, 2],
                [1, 2, 4, 1],
                [2, 1, 3, 2]
            ]
        },
        {
            "input": [
                "GGSSGG",
                "GGSSGG",
                "SSGGSS",
                "SSGGSS",
                "GGSSGG",
                "GGSSGG"
            ],
            "answer": 36,
            "explanation": [
                [0, 0, 1, 1],
                [0, 0, 1, 6],
                [0, 0, 6, 6]
            ]
        },
        {
            "input": [
                "RRRRRRR",
                "RTGGGGR",
                "RGSSSGR",
                "RGSSSGR",
                "RGSSSGR",
                "RGGGGGR",
                "RRRRRRR"
            ],
            "answer": 20,
            "explanation": [
                [1, 2, 1, 1],
                [1, 2, 1, 4],
                [1, 2, 5, 4]
            ]
        }
    ]
}
