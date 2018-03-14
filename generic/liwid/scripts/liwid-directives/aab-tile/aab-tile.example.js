define('component/ui/aab-tile/aab-tile.example', ['angular'], function() {
    'use strict';

    return function() {
        var self = this;
        self.tileSelected = [{
            name: 'My First Tile Interactive',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            logo: 'data:image/svg+xml;PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iODE1Ljg2MzgzIgogICBoZWlnaHQ9IjgxNS44NjM4MyIKICAgdmlld0JveD0iMCAwIDgxNS44NjM4MyA4MTUuODYzODYiCiAgIGlkPSJzdmc0MjA2IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJEcmF3aW5nLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQyMDgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuNjc0NjIyMTIiCiAgICAgaW5rc2NhcGU6Y3g9IjQxMS42NDk5NyIKICAgICBpbmtzY2FwZTpjeT0iMzc5LjI4NTYiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwNTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwLjIiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwLjIiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMC4yIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwLjIiCiAgICAgdW5pdHM9InB4IgogICAgIHNob3dndWlkZXM9ImZhbHNlIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTQyMTEiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjkuODYzNTMsMTM2Mi43MjgyKSI+CiAgICA8cmVjdAogICAgICAgcnk9IjQwIgogICAgICAgcng9IjQwIgogICAgICAgeT0iLTE5MjEuMTA3MiIKICAgICAgIHg9Ii0yOS4xNzg3MiIKICAgICAgIGhlaWdodD0iNjAwIgogICAgICAgd2lkdGg9IjYwMCIKICAgICAgIGlkPSJyZWN0NDc3MCIKICAgICAgIHN0eWxlPSJmaWxsOiNmZWUwMTE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjg7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MTA2NzgsMC43MDcxMDY3OCwtMC43MDcxMDY3OCwwLjcwNzEwNjc4LDAsMCkiIC8+CiAgICA8cmVjdAogICAgICAgcnk9IjMyIgogICAgICAgcng9IjMyIgogICAgICAgeT0iLTE5MTMuMTA3MSIKICAgICAgIHg9Ii0yMS4xNzg3NTEiCiAgICAgICBoZWlnaHQ9IjU4NCIKICAgICAgIHdpZHRoPSI1ODQiCiAgICAgICBpZD0icmVjdDQ3NzgiCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo4O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEwNjc4LDAuNzA3MTA2NzgsLTAuNzA3MTA2NzgsMC43MDcxMDY3OCwwLDApIiAvPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJmaWxsOiNmZWUwMTE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjg7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0NDc4OSIKICAgICAgIHdpZHRoPSI1NTIiCiAgICAgICBoZWlnaHQ9IjU1MiIKICAgICAgIHg9Ii01LjE3ODY2MDQiCiAgICAgICB5PSItMTg5Ny4xMDY5IgogICAgICAgcng9IjE2IgogICAgICAgcnk9IjE2IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxMDY3OCwwLjcwNzEwNjc4LC0wLjcwNzEwNjc4LDAuNzA3MTA2NzgsMCwwKSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEwMjIuMjYzNiwtOTkwLjQxNzg4IGMgNjIuMzQzOCwxMDYuMDIxNyAxNDUuNzk0OCwtMS44ODE5IDIwNi42OTE5LC03Mi4wMzQ0MiA2MC44OTcyLC03MC4xNTE4IDEzNy45ODY1LC02Ni44MjMzIDE4Ny4wMjMxLDEyLjAwODggMTIuODcxNiwyMC42Nzk5IDMzLjg0NzQsMzEuMTAyIDQ4LjE2NTUsMjguMzQ4MiAxNC4zMTgxLC0yLjc0NTIgMTIuMTQ4MiwtMTIuNTgzNSAyNy4zMzc1LC0xNS4zMjg3IC0xOC42NTc5LC04LjgyNzYgLTMzLjk4NzMsLTE3LjM1OTMgLTM4LjMyNzEsLTMxLjY3NzQgMTMuNzQyNywtMS40NDY2IDMzLjY5OTMsNi4yMTM4IDUxLjE5ODYsMjQuMTU2MyAyLjQ1NzMsLTEuMDE5MiAzLjc2NDUsLTMuNjE2NSA1LjY0NjQsLTEuNzQyNSA3LjA4NTEsNy4wOTM3IDQzLjEwMjMsMjMuNDMzNyA1Ni44NDUsNDEuMDgwMyAxLjU4NjcsMS44ODI2IC0wLjQzNCw4LjUzMTcyIC0yLjc1MzEsOC44Mjc2MiAtMTIuMjk2MiwxLjI5ODcgLTI1LjYwMzYsMCAtMzcuODkxMiwyLjU5NzMgLTYuOTQ1NywwLjQzNCAtMTIuNzMyMSwxLjQ1NTIgLTE5LjY3NzIsMS43NDI1IC03LjM3Myw3Ljk0ODUgLTEyLjcyMzUsMTcuOTM0NyAtMjIuNzEwNCwyMS42OTEyIC05LjI1NDksNi4zNjk3IC0xMi4yOTYxLDE0LjkwMTQgLTE4LjY1NzksMjQuMTU2NCAtNi43OTcsOS44Mzg5IC0xOC42NTc5LDE1Ljc2NDcgLTMxLjY3NzMsMTYuMzQ4NiAtMTAuNTUzNywxNi4wNTIgLTIwLjk2NzMsMzQuOTk4IC0zMS41Mjk1LDUxLjA1ODYgLTMuMzI4NSw1LjYzODQgLTkuNjkwMyw4LjUzMTcgLTE0LjAzMDIsNy4yMjQ1IC0yLjMxNzgsLTAuNTc4NyAtNS4wNjMxLC0yLjc0NTMgLTYuNzk3MywtNS45MjU5IC0xLjczNDMsLTMuMTgxMiAtMi40NTc2LC03Ljk1NjMgLTAuNzIzNCwtMTMuODgyOCA0Ljc3NTUsMy42MTY1IDMuNjE2NSwxMS40MjQ5IDEyLjAwODYsOS42OTEgMi44OTMyLC0xNy41MDcyIDUuOTI1OCwtMzkuNjMzNyA4Ljk2NjksLTU3LjEzMzEgLTcuMzgwOSwtMS4xNTg2IC0xNC4zMjYsLTUuMzUwNCAtMjEuNTUwOCwtNi4zNjk2IC02Ljk0NTMsOS4xMTQ5IC0xMi41ODM5LDE3LjY0NjYgLTE5LjM4OTUsMjYuNzYyMiAyLjYwNTYsMjguOTIzNSAxLjg4MjIsODMuMDIzMyAxMi4xNTY0LDg3LjIxNTIgMzMuNTUxMiwxMy43NDI3IDcwLjg3NTYsMjQuMDA5IDExMC4wNzMzLDMzLjcwNzggMy42MTY2LC0wLjQzMzkgNy4yMzMxLC0wLjg3MTIgMTAuOTg5NiwtMS4xNTkyIDMuOTAzOSwzLjkwNDUgOS4yNTUsNi41MDk3IDEyLjAwODIsMTIuMDAwMiAtMi4xNjk5LDAgLTQuMzM5OCwwIC02LjUwOTcsMCAtMC44NzEzLDEuNzQyNSAtMS41OTQ2LDMuNjE2NSAtMi4zMTc5LDUuNDk5MSAtMTEuMjc2OSwxLjU5NDYgLTIyLjcwOTcsLTAuNzIzMyAtMzMuODQ3MywtNi41MDk3IC0zMy41NTE0LC01LjkyNjUgLTY2LjM4NzQsLTEyLjAwMDMgLTEwMC4wODY4LC0xNi40ODggLTEwLjEyNjIsLTEuMjk4NyAtMTMuODkwNywtMTEuNDI0OSAtMTcuMzU5MiwtMjQuMDA5MSAtMTAuMjc0MiwtMzYuODg4NCAtMjQuNzMyMSwtNjguODUzMSAtNDAuMDY5MywtOTcuMzQxNCAtMzEuNjY5MiwtOS44Mzg5IC01Ny45OTU4LC00MC4zNTcgLTc4LjY4MzksLTU5LjAxNDkgLTY4Ljk5MzIsNDAuNDk2NCAtMTcxLjY4NTgsMTA2LjAyMSAtMjA0LjUyMjEsLTUuNDk5MSB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NzU5OTk5ODtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjYwMDA2O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgxMTg0MSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgPC9nPgo8L3N2Zz4K',
            defaultAction: 'My First Tile Interactive-Default action',
            status: 'interactive'
        }];
        self.list = [{
            name: 'My First Tile Interactive',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjUwMCIgICBoZWlnaHQ9IjUwMCIgICBpZD0ic3ZnMiIgICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSIgICB2ZXJzaW9uPSIxLjAiICAgc29kaXBvZGk6ZG9jbmFtZT0iQUpBWC5zdmciICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPiAgPGRlZnMgICAgIGlkPSJkZWZzNCI+ICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZSAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMzAwLjUgOiAxIiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiICAgICAgIGlua3NjYXBlOnZwX3o9IjYwMSA6IDMwMC41IDogMSIgICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMwMC41IDogMjAwLjMzMzMzIDogMSIgICAgICAgaWQ9InBlcnNwZWN0aXZlMzM4MCIgLz4gICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlICAgICAgIGlkPSJwZXJzcGVjdGl2ZTM5OTAiICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzUgOiAyNTAgOiAxIiAgICAgICBpbmtzY2FwZTp2cF96PSI3NTAgOiAzNzUgOiAxIiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAzNzUgOiAxIiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPiAgPC9kZWZzPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMS4xNTcyOTMiICAgICBpbmtzY2FwZTpjeD0iMjYwLjc0MzE0IiAgICAgaW5rc2NhcGU6Y3k9IjE2OS4yMzU3NyIgICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIgICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgICAgIHdpZHRoPSI2MDFweCIgICAgIGhlaWdodD0iNjAxcHgiICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IiAgICAgc2hvd2dyaWQ9ImZhbHNlIiAgICAgZml0LW1hcmdpbi10b3A9IjAiICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIgICAgIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiIC8+ICA8bWV0YWRhdGEgICAgIGlkPSJtZXRhZGF0YTciPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8ZGM6dGl0bGUgLz4gICAgICA8L2NjOldvcms+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+ICA8ZyAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiAgICAgaWQ9ImxheWVyMSIgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NTQuNjkzNywzNzMyLjQ4ODgpIj4gICAgPHJlY3QgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjg3MzU0NDE7bWFya2VyOm5vbmU7dmlzaWJpbGl0eTp2aXNpYmxlO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGUiICAgICAgIGlkPSJyZWN0MzY1MyIgICAgICAgd2lkdGg9IjAiICAgICAgIGhlaWdodD0iMjcuMjAyMDcyIiAgICAgICB4PSI1NzguNzM4MzQiICAgICAgIHk9IjI5OC4xNjg0IiAgICAgICByeD0iMjQ5LjQ4MTk5IiAgICAgICByeT0iMjcuMjAyMDcyIiAvPiAgICA8cGF0aCAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzdHlsZT0iZmlsbDojMGM0NzlkO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAgICAgICBkPSJtIC0yNTU0LjY5MzcsLTM3MzIuNDg4OCA1MDAsMCAwLDUwMCAtNTAwLDAgMCwtNTAwIHoiICAgICAgIGlkPSJwYXRoMTEiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI1NTQuNjkzNywtMzI2My43Mzg4IGMgMCwxNy4yNTg5IDEzLjk5MTMsMzEuMjUgMzEuMjUsMzEuMjUgbCA0MzcuNSwwIGMgMTcuMjU4NywwIDMxLjI1LC0xMy45OTExIDMxLjI1LC0zMS4yNSBsIDAsLTQzNy41IGMgMCwtMTcuMjU4OSAtMTMuOTkxMywtMzEuMjUgLTMxLjI1LC0zMS4yNSBsIC00MzcuNSwwIGMgLTE3LjI1ODcsMCAtMzEuMjUsMTMuOTkxMSAtMzEuMjUsMzEuMjUgeiIgICAgICAgaWQ9InBhdGgxMyIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3MiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJmaWxsOiMwYzQ3OWQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTIwNzAuMzE4NywtMzcwMS4yMzg4IGMgMCwtOC42Mjg4IC02Ljk5NTEsLTE1LjYyNSAtMTUuNjI1LC0xNS42MjUgbCAtNDM3LjUsMCBjIC04LjYyOTksMCAtMTUuNjI1LDYuOTk2MiAtMTUuNjI1LDE1LjYyNSBsIDAsNDM3LjUgYyAwLDguNjI4OCA2Ljk5NTEsMTUuNjI1IDE1LjYyNSwxNS42MjUgbCA0MzcuNSwwIGMgOC42Mjk5LDAgMTUuNjI1LC02Ljk5NjIgMTUuNjI1LC0xNS42MjUgeiIgICAgICAgaWQ9InBhdGgxNSIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3MiIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI0NjAuOTQ0LC0zNjM4LjczODggMzEyLjUsMCAwLDMxMi41IC0zMTIuNSwwIDAsLTMxMi41IHoiICAgICAgIGlkPSJwYXRoMTciIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI0MDYuNzc3MiwtMzQ4Mi40MzgzIGMgLTIuMjIyNSwyNi41OTE3IC0xNi40MDA5LDUwLjczMjggLTM4LjU0MTEsNjUuNjI1NiAxNC41NCwzLjkzMDEgMzAuMDM4LDIuMDYzOCA0My4yMjg2LC01LjIwNzkgbCAwLDM4LjAyMDcgLTQ0LjI3MDUsMCAwLDIzLjk1ODEgMjgwLjIwODcsMCAwLjUyMDMsMCAwLC0yMy45NTgxIC0wLjUyMDMsMCAtMTEuOTc5LDAgMCwtMTE5LjI3MTEgMjAuODMyNiwwIC05OC4xNzcxLC0xMDEuNjY1MiAtOTguMTc2LDEwMS42NjUyIDIwLjgzMjYsMCAwLDExOS4yNzExIC01My42NDY1LDAgMCwtMzguMDIwNyBjIDE0LjE2MTgsNy4xNjY5IDMwLjQyNjEsOS4wMTQ2IDQ1LjgzMzcsNS4yMDc5IC0yMy4zNzUsLTEzLjc2NzIgLTM4LjEwNDUsLTM4LjUxNDYgLTM5LjA2MjYsLTY1LjYyNTYgOS4wNDIzLDcuODQ3MSAyMC4zNTc2LDEyLjU5MiAzMi4yOTI1LDEzLjU0MjMgLTI1LjkxODIsLTI0LjM5MzYgLTQyLjE4NzksLTU3LjMwMzQgLTQ1LjgzNDgsLTkyLjcwOCAtNC40NzM2LDM0Ljk0NDkgLTIwLjE5NjUsNjcuNDg1NCAtNDQuNzkxOCw5Mi43MDggMTEuNTUzNSwtMS4yMjgxIDIyLjQ1NTUsLTUuOTUzMiAzMS4yNTA3LC0xMy41NDIzIHoiICAgICAgIGlkPSJwYXRoMTkiIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTIyNzYuMDQ4NSwtMzQ0NS45Nzg3IDAsNjEuOTc4OCA0MS42Njc1LDAgMCwtNjEuOTc4OCAtNDEuNjY3NSwwIHoiICAgICAgIGlkPSJwYXRoMjEiIC8+ICA8L2c+PC9zdmc+',
            icon: 'ocf-contract-type-insurance',
            defaultAction: 'My First Tile Interactive-Default action',
            defaultActionDescription: 'Click this tile and your life will be better',
            status: 'interactive'
        }, {
            name: 'My Second Tile is readonly',
            primaryInfo: 88.256,
            currency: 'USD',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjgxNS44NjM4MyIgICBoZWlnaHQ9IjgxNS44NjM4MyIgICB2aWV3Qm94PSIwIDAgODE1Ljg2MzgzIDgxNS44NjM4NiIgICBpZD0ic3ZnNDIwNiIgICB2ZXJzaW9uPSIxLjEiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiICAgc29kaXBvZGk6ZG9jbmFtZT0iRHJhd2luZy5zdmciPiAgPGRlZnMgICAgIGlkPSJkZWZzNDIwOCIgLz4gIDxzb2RpcG9kaTpuYW1lZHZpZXcgICAgIGlkPSJiYXNlIiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiICAgICBib3JkZXJvcGFjaXR5PSIxLjAiICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgICAgIGlua3NjYXBlOnpvb209IjAuNjc0NjIyMTIiICAgICBpbmtzY2FwZTpjeD0iNDExLjY0OTk3IiAgICAgaW5rc2NhcGU6Y3k9IjM3OS4yODU2IiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiAgICAgc2hvd2dyaWQ9ImZhbHNlIiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1NyIgICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIgICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiICAgICBmaXQtbWFyZ2luLXRvcD0iMC4yIiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwLjIiICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwLjIiICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMC4yIiAgICAgdW5pdHM9InB4IiAgICAgc2hvd2d1aWRlcz0iZmFsc2UiIC8+ICA8bWV0YWRhdGEgICAgIGlkPSJtZXRhZGF0YTQyMTEiPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4gICAgICA8L2NjOldvcms+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+ICA8ZyAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiAgICAgaWQ9ImxheWVyMSIgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjkuODYzNTMsMTM2Mi43MjgyKSI+ICAgIDxyZWN0ICAgICAgIHJ5PSI0MCIgICAgICAgcng9IjQwIiAgICAgICB5PSItMTkyMS4xMDcyIiAgICAgICB4PSItMjkuMTc4NzIiICAgICAgIGhlaWdodD0iNjAwIiAgICAgICB3aWR0aD0iNjAwIiAgICAgICBpZD0icmVjdDQ3NzAiICAgICAgIHN0eWxlPSJmaWxsOiNmZWUwMTE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjg7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxMDY3OCwwLjcwNzEwNjc4LC0wLjcwNzEwNjc4LDAuNzA3MTA2NzgsMCwwKSIgLz4gICAgPHJlY3QgICAgICAgcnk9IjMyIiAgICAgICByeD0iMzIiICAgICAgIHk9Ii0xOTEzLjEwNzEiICAgICAgIHg9Ii0yMS4xNzg3NTEiICAgICAgIGhlaWdodD0iNTg0IiAgICAgICB3aWR0aD0iNTg0IiAgICAgICBpZD0icmVjdDQ3NzgiICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjg7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxMDY3OCwwLjcwNzEwNjc4LC0wLjcwNzEwNjc4LDAuNzA3MTA2NzgsMCwwKSIgLz4gICAgPHJlY3QgICAgICAgc3R5bGU9ImZpbGw6I2ZlZTAxMTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6ODtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAgICAgICBpZD0icmVjdDQ3ODkiICAgICAgIHdpZHRoPSI1NTIiICAgICAgIGhlaWdodD0iNTUyIiAgICAgICB4PSItNS4xNzg2NjA0IiAgICAgICB5PSItMTg5Ny4xMDY5IiAgICAgICByeD0iMTYiICAgICAgIHJ5PSIxNiIgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxMDY3OCwwLjcwNzEwNjc4LC0wLjcwNzEwNjc4LDAuNzA3MTA2NzgsMCwwKSIgLz4gICAgPHBhdGggICAgICAgZD0ibSAxMDIyLjI2MzYsLTk5MC40MTc4OCBjIDYyLjM0MzgsMTA2LjAyMTcgMTQ1Ljc5NDgsLTEuODgxOSAyMDYuNjkxOSwtNzIuMDM0NDIgNjAuODk3MiwtNzAuMTUxOCAxMzcuOTg2NSwtNjYuODIzMyAxODcuMDIzMSwxMi4wMDg4IDEyLjg3MTYsMjAuNjc5OSAzMy44NDc0LDMxLjEwMiA0OC4xNjU1LDI4LjM0ODIgMTQuMzE4MSwtMi43NDUyIDEyLjE0ODIsLTEyLjU4MzUgMjcuMzM3NSwtMTUuMzI4NyAtMTguNjU3OSwtOC44Mjc2IC0zMy45ODczLC0xNy4zNTkzIC0zOC4zMjcxLC0zMS42Nzc0IDEzLjc0MjcsLTEuNDQ2NiAzMy42OTkzLDYuMjEzOCA1MS4xOTg2LDI0LjE1NjMgMi40NTczLC0xLjAxOTIgMy43NjQ1LC0zLjYxNjUgNS42NDY0LC0xLjc0MjUgNy4wODUxLDcuMDkzNyA0My4xMDIzLDIzLjQzMzcgNTYuODQ1LDQxLjA4MDMgMS41ODY3LDEuODgyNiAtMC40MzQsOC41MzE3MiAtMi43NTMxLDguODI3NjIgLTEyLjI5NjIsMS4yOTg3IC0yNS42MDM2LDAgLTM3Ljg5MTIsMi41OTczIC02Ljk0NTcsMC40MzQgLTEyLjczMjEsMS40NTUyIC0xOS42NzcyLDEuNzQyNSAtNy4zNzMsNy45NDg1IC0xMi43MjM1LDE3LjkzNDcgLTIyLjcxMDQsMjEuNjkxMiAtOS4yNTQ5LDYuMzY5NyAtMTIuMjk2MSwxNC45MDE0IC0xOC42NTc5LDI0LjE1NjQgLTYuNzk3LDkuODM4OSAtMTguNjU3OSwxNS43NjQ3IC0zMS42NzczLDE2LjM0ODYgLTEwLjU1MzcsMTYuMDUyIC0yMC45NjczLDM0Ljk5OCAtMzEuNTI5NSw1MS4wNTg2IC0zLjMyODUsNS42Mzg0IC05LjY5MDMsOC41MzE3IC0xNC4wMzAyLDcuMjI0NSAtMi4zMTc4LC0wLjU3ODcgLTUuMDYzMSwtMi43NDUzIC02Ljc5NzMsLTUuOTI1OSAtMS43MzQzLC0zLjE4MTIgLTIuNDU3NiwtNy45NTYzIC0wLjcyMzQsLTEzLjg4MjggNC43NzU1LDMuNjE2NSAzLjYxNjUsMTEuNDI0OSAxMi4wMDg2LDkuNjkxIDIuODkzMiwtMTcuNTA3MiA1LjkyNTgsLTM5LjYzMzcgOC45NjY5LC01Ny4xMzMxIC03LjM4MDksLTEuMTU4NiAtMTQuMzI2LC01LjM1MDQgLTIxLjU1MDgsLTYuMzY5NiAtNi45NDUzLDkuMTE0OSAtMTIuNTgzOSwxNy42NDY2IC0xOS4zODk1LDI2Ljc2MjIgMi42MDU2LDI4LjkyMzUgMS44ODIyLDgzLjAyMzMgMTIuMTU2NCw4Ny4yMTUyIDMzLjU1MTIsMTMuNzQyNyA3MC44NzU2LDI0LjAwOSAxMTAuMDczMywzMy43MDc4IDMuNjE2NiwtMC40MzM5IDcuMjMzMSwtMC44NzEyIDEwLjk4OTYsLTEuMTU5MiAzLjkwMzksMy45MDQ1IDkuMjU1LDYuNTA5NyAxMi4wMDgyLDEyLjAwMDIgLTIuMTY5OSwwIC00LjMzOTgsMCAtNi41MDk3LDAgLTAuODcxMywxLjc0MjUgLTEuNTk0NiwzLjYxNjUgLTIuMzE3OSw1LjQ5OTEgLTExLjI3NjksMS41OTQ2IC0yMi43MDk3LC0wLjcyMzMgLTMzLjg0NzMsLTYuNTA5NyAtMzMuNTUxNCwtNS45MjY1IC02Ni4zODc0LC0xMi4wMDAzIC0xMDAuMDg2OCwtMTYuNDg4IC0xMC4xMjYyLC0xLjI5ODcgLTEzLjg5MDcsLTExLjQyNDkgLTE3LjM1OTIsLTI0LjAwOTEgLTEwLjI3NDIsLTM2Ljg4ODQgLTI0LjczMjEsLTY4Ljg1MzEgLTQwLjA2OTMsLTk3LjM0MTQgLTMxLjY2OTIsLTkuODM4OSAtNTcuOTk1OCwtNDAuMzU3IC03OC42ODM5LC01OS4wMTQ5IC02OC45OTMyLDQwLjQ5NjQgLTE3MS42ODU4LDEwNi4wMjEgLTIwNC41MjIxLC01LjQ5OTEgeiIgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NzU5OTk5ODtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjYwMDA2O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAgICAgICBpZD0icGF0aDExODQxIiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPiAgPC9nPjwvc3ZnPg==',
            icon: 'ocf-contract-type-invest',
            defaultAction: 'Default action',
            defaultActionDescription: '',
            status: 'readonly'
        }, {
            name: 'My Second Tile is disabled',
            primaryInfo: 3456,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'notarealclass',
            defaultAction: 'Default action',
            status: 'disabled'
        }, {
            name: 'My Tile Interactive with No Amount',
            primaryInfo: 'Your account has been cancelled',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjUwMCIgICBoZWlnaHQ9IjUwMCIgICBpZD0ic3ZnMiIgICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSIgICB2ZXJzaW9uPSIxLjAiICAgc29kaXBvZGk6ZG9jbmFtZT0iQUpBWC5zdmciICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPiAgPGRlZnMgICAgIGlkPSJkZWZzNCI+ICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZSAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMzAwLjUgOiAxIiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiICAgICAgIGlua3NjYXBlOnZwX3o9IjYwMSA6IDMwMC41IDogMSIgICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMwMC41IDogMjAwLjMzMzMzIDogMSIgICAgICAgaWQ9InBlcnNwZWN0aXZlMzM4MCIgLz4gICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlICAgICAgIGlkPSJwZXJzcGVjdGl2ZTM5OTAiICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzUgOiAyNTAgOiAxIiAgICAgICBpbmtzY2FwZTp2cF96PSI3NTAgOiAzNzUgOiAxIiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAzNzUgOiAxIiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPiAgPC9kZWZzPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMS4xNTcyOTMiICAgICBpbmtzY2FwZTpjeD0iMjYwLjc0MzE0IiAgICAgaW5rc2NhcGU6Y3k9IjE2OS4yMzU3NyIgICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIgICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgICAgIHdpZHRoPSI2MDFweCIgICAgIGhlaWdodD0iNjAxcHgiICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IiAgICAgc2hvd2dyaWQ9ImZhbHNlIiAgICAgZml0LW1hcmdpbi10b3A9IjAiICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIgICAgIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiIC8+ICA8bWV0YWRhdGEgICAgIGlkPSJtZXRhZGF0YTciPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8ZGM6dGl0bGUgLz4gICAgICA8L2NjOldvcms+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+ICA8ZyAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiAgICAgaWQ9ImxheWVyMSIgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NTQuNjkzNywzNzMyLjQ4ODgpIj4gICAgPHJlY3QgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjg3MzU0NDE7bWFya2VyOm5vbmU7dmlzaWJpbGl0eTp2aXNpYmxlO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGUiICAgICAgIGlkPSJyZWN0MzY1MyIgICAgICAgd2lkdGg9IjAiICAgICAgIGhlaWdodD0iMjcuMjAyMDcyIiAgICAgICB4PSI1NzguNzM4MzQiICAgICAgIHk9IjI5OC4xNjg0IiAgICAgICByeD0iMjQ5LjQ4MTk5IiAgICAgICByeT0iMjcuMjAyMDcyIiAvPiAgICA8cGF0aCAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzdHlsZT0iZmlsbDojMGM0NzlkO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAgICAgICBkPSJtIC0yNTU0LjY5MzcsLTM3MzIuNDg4OCA1MDAsMCAwLDUwMCAtNTAwLDAgMCwtNTAwIHoiICAgICAgIGlkPSJwYXRoMTEiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI1NTQuNjkzNywtMzI2My43Mzg4IGMgMCwxNy4yNTg5IDEzLjk5MTMsMzEuMjUgMzEuMjUsMzEuMjUgbCA0MzcuNSwwIGMgMTcuMjU4NywwIDMxLjI1LC0xMy45OTExIDMxLjI1LC0zMS4yNSBsIDAsLTQzNy41IGMgMCwtMTcuMjU4OSAtMTMuOTkxMywtMzEuMjUgLTMxLjI1LC0zMS4yNSBsIC00MzcuNSwwIGMgLTE3LjI1ODcsMCAtMzEuMjUsMTMuOTkxMSAtMzEuMjUsMzEuMjUgeiIgICAgICAgaWQ9InBhdGgxMyIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3MiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJmaWxsOiMwYzQ3OWQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTIwNzAuMzE4NywtMzcwMS4yMzg4IGMgMCwtOC42Mjg4IC02Ljk5NTEsLTE1LjYyNSAtMTUuNjI1LC0xNS42MjUgbCAtNDM3LjUsMCBjIC04LjYyOTksMCAtMTUuNjI1LDYuOTk2MiAtMTUuNjI1LDE1LjYyNSBsIDAsNDM3LjUgYyAwLDguNjI4OCA2Ljk5NTEsMTUuNjI1IDE1LjYyNSwxNS42MjUgbCA0MzcuNSwwIGMgOC42Mjk5LDAgMTUuNjI1LC02Ljk5NjIgMTUuNjI1LC0xNS42MjUgeiIgICAgICAgaWQ9InBhdGgxNSIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3MiIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI0NjAuOTQ0LC0zNjM4LjczODggMzEyLjUsMCAwLDMxMi41IC0zMTIuNSwwIDAsLTMxMi41IHoiICAgICAgIGlkPSJwYXRoMTciIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI0MDYuNzc3MiwtMzQ4Mi40MzgzIGMgLTIuMjIyNSwyNi41OTE3IC0xNi40MDA5LDUwLjczMjggLTM4LjU0MTEsNjUuNjI1NiAxNC41NCwzLjkzMDEgMzAuMDM4LDIuMDYzOCA0My4yMjg2LC01LjIwNzkgbCAwLDM4LjAyMDcgLTQ0LjI3MDUsMCAwLDIzLjk1ODEgMjgwLjIwODcsMCAwLjUyMDMsMCAwLC0yMy45NTgxIC0wLjUyMDMsMCAtMTEuOTc5LDAgMCwtMTE5LjI3MTEgMjAuODMyNiwwIC05OC4xNzcxLC0xMDEuNjY1MiAtOTguMTc2LDEwMS42NjUyIDIwLjgzMjYsMCAwLDExOS4yNzExIC01My42NDY1LDAgMCwtMzguMDIwNyBjIDE0LjE2MTgsNy4xNjY5IDMwLjQyNjEsOS4wMTQ2IDQ1LjgzMzcsNS4yMDc5IC0yMy4zNzUsLTEzLjc2NzIgLTM4LjEwNDUsLTM4LjUxNDYgLTM5LjA2MjYsLTY1LjYyNTYgOS4wNDIzLDcuODQ3MSAyMC4zNTc2LDEyLjU5MiAzMi4yOTI1LDEzLjU0MjMgLTI1LjkxODIsLTI0LjM5MzYgLTQyLjE4NzksLTU3LjMwMzQgLTQ1LjgzNDgsLTkyLjcwOCAtNC40NzM2LDM0Ljk0NDkgLTIwLjE5NjUsNjcuNDg1NCAtNDQuNzkxOCw5Mi43MDggMTEuNTUzNSwtMS4yMjgxIDIyLjQ1NTUsLTUuOTUzMiAzMS4yNTA3LC0xMy41NDIzIHoiICAgICAgIGlkPSJwYXRoMTkiIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTIyNzYuMDQ4NSwtMzQ0NS45Nzg3IDAsNjEuOTc4OCA0MS42Njc1LDAgMCwtNjEuOTc4OCAtNDEuNjY3NSwwIHoiICAgICAgIGlkPSJwYXRoMjEiIC8+ICA8L2c+PC9zdmc+',
            icon: 'ocf-contract-type-insurance',
            defaultAction: 'My Tile Interactive with No Amount-Default action',
            defaultActionDescription: 'Click this tile and your life will be better',
            status: 'interactive'
        }, {
            name: 'My Compact Tile Interactive',
            primaryInfo: 87654.875,
            currency: 'GBP',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            display: 'compact',
            defaultAction: 'My Compact Tile Interactive-Default action',
            defaultActionDescription: 'Click this tile to go to your Account',
            status: 'interactive'
        }, {
            name: 'My Compact Tile is readonly',
            primaryInfo: 888888.8766,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            display: 'compact',
            defaultAction: 'Default action',
            status: 'readonly'
        }, {
            name: 'My Compact Tile is disabled:-(',
            primaryInfo: 765433.98766,
            currency: 'USD',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            display: 'compact',
            defaultAction: 'Default action',
            status: 'disabled'
        }, {
            name: 'My One liner is so interactive',
            primaryInfo: 765433.98766,
            currency: 'USD',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-Ideal',
            defaultAction: 'My One liner is so interactive-Default action',
            defaultActionDescription: 'Click this tile and your life will be better',
            display: 'oneLine',
            status: 'interactive'
        }, {
            name: 'My One line read only tile',
            primaryInfo: 765433.98766,
            currency: 'USD',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-Ideal',
            display: 'oneLine',
            defaultAction: 'Default action',
            status: 'readonly'
        }, {
            name: 'My One line disabled',
            primaryInfo: 765433.98766,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-Ideal',
            display: 'oneLine',
            defaultAction: 'Default action',
            status: 'disabled'
        }, {
            name: 'My icon configured tile',
            primaryInfo: 765433.98766,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            display: 'oneLine',
            defaultAction: 'My icon configured tile-Default action',
            defaultActionDescription: 'go to your My icon configured tile account',
            icon: 'ocf-contract-type-savings',
            status: 'interactive'
        }, {
            name: 'My readonly merged tile',
            primaryInfo: 88.256,
            currency: 'USD',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-invest',
            status: 'readonly',
            defaultAction: 'Default action',
            merge: true
        }, {
            name: 'My merged tile',
            primaryInfo: 88.256,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-Ideal',
            defaultAction: 'My merged tile-Default action',
            status: 'readonly'
        }];

        self.list1 = [{
            name: 'Tile with secondary ONLY action (information)',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-insurance',
            status: 'secondaryonly',
            defaultAction: 'Tile default action (information)',
            defaultActionDescription: 'go to your account',
            secondaryAction: 'Tile secondary action (information)',
            secondaryActionIndicator: 'information',
            secondaryActionDescription: 'Show more information for this account'
        }, {
            name: 'READONLY Tile with secondary indicator and action (delete)',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-insurance',
            status: 'readonly',
            defaultAction: 'Tile default action (delete)',
            defaultActionDescription: 'go to your insurance account',
            secondaryAction: 'Tile secondary action (delete)',
            secondaryActionIndicator: 'delete',
            secondaryActionDescription: 'delete this account'
        }, {
            name: 'Tile with secondary indicator and action (positive)',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 14',
            icon: 'ocf-contract-type-insurance',
            status: 'interactive',
            defaultAction: 'Tile default action (positive)',
            defaultActionDescription: 'This is default action of tile',
            secondaryAction: 'Tile secondary action (positive)',
            secondaryActionIndicator: 'positive',
            secondaryActionDescription: 'Secondary icon is positive'
        }];

        self.defaultActionList = [{
            name: 'Tile with secondary indicator only(drag)',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-payment',
            status: 'interactive',
            defaultAction: 'Tile default action (drag)',
            defaultActionDescription: 'change the order by dragging',
            secondaryActionIndicator: 'drag'
        }, {
            name: 'Compact tile with secondary indicator only (stepUpCosign)',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-insurance',
            status: 'interactive',
            defaultAction: 'Compact tile (secondary indicator only) default action',
            defaultActionDescription: 'go to your account NL02 ABNA 9876 5432 10',
            secondaryActionIndicator: 'stepUpCosign',
            secondaryActionDescription: 'you need co signing',
            display: 'compact'
        }, {
            name: 'Tile with secondary indicator only (stepUpCosign)',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-savings',
            status: 'interactive',
            defaultAction: 'Tile default action (stepUpCosign)',
            secondaryActionIndicator: 'stepUpCosign',
            secondaryActionDescription: 'you need co signing'
        }, {
            name: 'Oneline tile with secondary indicator only (dropdown)',
            primaryInfo: 123.45,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-credits',
            status: 'interactive',
            defaultAction: 'Oneline tile default action (dropdown)',
            secondaryActionIndicator: 'dropdown',
            secondaryActionDescription: 'Show more accounts',
            display: 'oneline'
        }, {
            name: 'Compact tile with secondary indicator only (navigate)',
            primaryInfo: 888.88,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-payment',
            status: 'interactive',
            defaultAction: 'Compact tile default action (navigate)',
            defaultActionDescription: 'go to account NL02 ABNA 9876 5432 10',
            secondaryActionIndicator: 'navigate',
            display: 'compact'
        }, {
            name: 'Tile with secondary indicator only(negative)',
            primaryInfo: 444.29,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-payment',
            status: 'interactive',
            defaultAction: 'Tile default action (negative)',
            defaultActionDescription: 'Secondary icon is negative',
            secondaryActionIndicator: 'negative'
        }, {
            name: 'Tile with secondary indicator only(inProgress)',
            primaryInfo: 554.14,
            currency: 'EUR',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-payment',
            status: 'interactive',
            defaultAction: 'Tile default action (inProgress)',
            defaultActionDescription: 'Secondary icon is inProgress',
            secondaryActionIndicator: 'inProgressState'
        }];
        self.disableTileWithExtension = [{
            name: 'My Disable tile with cancel icon and notification block',
            primaryInfoIcon: 'ocf-icon-cancel',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-payment',
            defaultAction: 'Default action',
            status: 'disabled',
            isTileExtended: true
        }];
        self.disableTileWithWarningicon = [{
            name: 'Disable tile with warning icon and paragraph',
            primaryInfoIcon: 'glyphicon-warning-sign',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-credits',
            defaultAction: 'Default action',
            status: 'disabled',
            isTileExtended: true
        }];
        self.intractiveTilePrimaryinfoIcon = [{
            name: 'Interactive tile with primary info icon and extension',
            primaryInfoIcon: 'ocf-icon-mail',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            icon: 'ocf-contract-type-credits',
            defaultAction: 'Default action of inractive tile',
            status: 'interactive',
            isTileExtended: true
        }];
        self.compactTileExtraAddInfoSecondaryIcon = [{
            name: 'Compact tile with secondary indicator and inline icon',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            inLineIcon: 'ocf-contract-type-payment',
            status: 'interactive',
            defaultAction: 'Compact tile (secondary indicator only) default action',
            defaultActionDescription: 'go to your account NL02 ABNA 9876 5432 10',
            secondaryActionIndicator: 'navigate',
            secondaryActionDescription: 'you need co signing',
            display: 'compact',
            moreInfoInAdditionalField: 1486
        }];

        self.halfTileList = [{
            name: 'Half tile with name and icon',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjUwMCIgICBoZWlnaHQ9IjUwMCIgICBpZD0ic3ZnMiIgICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSIgICB2ZXJzaW9uPSIxLjAiICAgc29kaXBvZGk6ZG9jbmFtZT0iQUpBWC5zdmciICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPiAgPGRlZnMgICAgIGlkPSJkZWZzNCI+ICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZSAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMzAwLjUgOiAxIiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiICAgICAgIGlua3NjYXBlOnZwX3o9IjYwMSA6IDMwMC41IDogMSIgICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMwMC41IDogMjAwLjMzMzMzIDogMSIgICAgICAgaWQ9InBlcnNwZWN0aXZlMzM4MCIgLz4gICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlICAgICAgIGlkPSJwZXJzcGVjdGl2ZTM5OTAiICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzUgOiAyNTAgOiAxIiAgICAgICBpbmtzY2FwZTp2cF96PSI3NTAgOiAzNzUgOiAxIiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAzNzUgOiAxIiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPiAgPC9kZWZzPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMS4xNTcyOTMiICAgICBpbmtzY2FwZTpjeD0iMjYwLjc0MzE0IiAgICAgaW5rc2NhcGU6Y3k9IjE2OS4yMzU3NyIgICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIgICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgICAgIHdpZHRoPSI2MDFweCIgICAgIGhlaWdodD0iNjAxcHgiICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IiAgICAgc2hvd2dyaWQ9ImZhbHNlIiAgICAgZml0LW1hcmdpbi10b3A9IjAiICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIgICAgIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiIC8+ICA8bWV0YWRhdGEgICAgIGlkPSJtZXRhZGF0YTciPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8ZGM6dGl0bGUgLz4gICAgICA8L2NjOldvcms+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+ICA8ZyAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiAgICAgaWQ9ImxheWVyMSIgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NTQuNjkzNywzNzMyLjQ4ODgpIj4gICAgPHJlY3QgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjg3MzU0NDE7bWFya2VyOm5vbmU7dmlzaWJpbGl0eTp2aXNpYmxlO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGUiICAgICAgIGlkPSJyZWN0MzY1MyIgICAgICAgd2lkdGg9IjAiICAgICAgIGhlaWdodD0iMjcuMjAyMDcyIiAgICAgICB4PSI1NzguNzM4MzQiICAgICAgIHk9IjI5OC4xNjg0IiAgICAgICByeD0iMjQ5LjQ4MTk5IiAgICAgICByeT0iMjcuMjAyMDcyIiAvPiAgICA8cGF0aCAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzdHlsZT0iZmlsbDojMGM0NzlkO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAgICAgICBkPSJtIC0yNTU0LjY5MzcsLTM3MzIuNDg4OCA1MDAsMCAwLDUwMCAtNTAwLDAgMCwtNTAwIHoiICAgICAgIGlkPSJwYXRoMTEiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI1NTQuNjkzNywtMzI2My43Mzg4IGMgMCwxNy4yNTg5IDEzLjk5MTMsMzEuMjUgMzEuMjUsMzEuMjUgbCA0MzcuNSwwIGMgMTcuMjU4NywwIDMxLjI1LC0xMy45OTExIDMxLjI1LC0zMS4yNSBsIDAsLTQzNy41IGMgMCwtMTcuMjU4OSAtMTMuOTkxMywtMzEuMjUgLTMxLjI1LC0zMS4yNSBsIC00MzcuNSwwIGMgLTE3LjI1ODcsMCAtMzEuMjUsMTMuOTkxMSAtMzEuMjUsMzEuMjUgeiIgICAgICAgaWQ9InBhdGgxMyIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3MiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJmaWxsOiMwYzQ3OWQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTIwNzAuMzE4NywtMzcwMS4yMzg4IGMgMCwtOC42Mjg4IC02Ljk5NTEsLTE1LjYyNSAtMTUuNjI1LC0xNS42MjUgbCAtNDM3LjUsMCBjIC04LjYyOTksMCAtMTUuNjI1LDYuOTk2MiAtMTUuNjI1LDE1LjYyNSBsIDAsNDM3LjUgYyAwLDguNjI4OCA2Ljk5NTEsMTUuNjI1IDE1LjYyNSwxNS42MjUgbCA0MzcuNSwwIGMgOC42Mjk5LDAgMTUuNjI1LC02Ljk5NjIgMTUuNjI1LC0xNS42MjUgeiIgICAgICAgaWQ9InBhdGgxNSIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3MiIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI0NjAuOTQ0LC0zNjM4LjczODggMzEyLjUsMCAwLDMxMi41IC0zMTIuNSwwIDAsLTMxMi41IHoiICAgICAgIGlkPSJwYXRoMTciIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI0MDYuNzc3MiwtMzQ4Mi40MzgzIGMgLTIuMjIyNSwyNi41OTE3IC0xNi40MDA5LDUwLjczMjggLTM4LjU0MTEsNjUuNjI1NiAxNC41NCwzLjkzMDEgMzAuMDM4LDIuMDYzOCA0My4yMjg2LC01LjIwNzkgbCAwLDM4LjAyMDcgLTQ0LjI3MDUsMCAwLDIzLjk1ODEgMjgwLjIwODcsMCAwLjUyMDMsMCAwLC0yMy45NTgxIC0wLjUyMDMsMCAtMTEuOTc5LDAgMCwtMTE5LjI3MTEgMjAuODMyNiwwIC05OC4xNzcxLC0xMDEuNjY1MiAtOTguMTc2LDEwMS42NjUyIDIwLjgzMjYsMCAwLDExOS4yNzExIC01My42NDY1LDAgMCwtMzguMDIwNyBjIDE0LjE2MTgsNy4xNjY5IDMwLjQyNjEsOS4wMTQ2IDQ1LjgzMzcsNS4yMDc5IC0yMy4zNzUsLTEzLjc2NzIgLTM4LjEwNDUsLTM4LjUxNDYgLTM5LjA2MjYsLTY1LjYyNTYgOS4wNDIzLDcuODQ3MSAyMC4zNTc2LDEyLjU5MiAzMi4yOTI1LDEzLjU0MjMgLTI1LjkxODIsLTI0LjM5MzYgLTQyLjE4NzksLTU3LjMwMzQgLTQ1LjgzNDgsLTkyLjcwOCAtNC40NzM2LDM0Ljk0NDkgLTIwLjE5NjUsNjcuNDg1NCAtNDQuNzkxOCw5Mi43MDggMTEuNTUzNSwtMS4yMjgxIDIyLjQ1NTUsLTUuOTUzMiAzMS4yNTA3LC0xMy41NDIzIHoiICAgICAgIGlkPSJwYXRoMTkiIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTIyNzYuMDQ4NSwtMzQ0NS45Nzg3IDAsNjEuOTc4OCA0MS42Njc1LDAgMCwtNjEuOTc4OCAtNDEuNjY3NSwwIHoiICAgICAgIGlkPSJwYXRoMjEiIC8+ICA8L2c+PC9zdmc+',
            status: 'interactive',
            defaultAction: 'Half tile with name and icon',
            secondaryActionIndicator: 'navigate'
        }, {
            name: 'Half tile with name only',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            status: 'interactive',
            defaultAction: 'Half tile with name only',
            secondaryActionIndicator: 'stepUp'
        }, {
            name: 'Second half tile with name only',
            additionalInfo: 'some line',
            additionalInfoExtra: 'NL02 ABNA 9876 5432 10',
            status: 'interactive',
            defaultAction: 'Second Half tile with name only',
            secondaryActionIndicator: 'navigate'
        }];

        self.halfTileListSecondaryAction = [{
            name: 'Half tile with name, icon and secondary action',
            logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjUwMCIgICBoZWlnaHQ9IjUwMCIgICBpZD0ic3ZnMiIgICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSIgICB2ZXJzaW9uPSIxLjAiICAgc29kaXBvZGk6ZG9jbmFtZT0iQUpBWC5zdmciICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPiAgPGRlZnMgICAgIGlkPSJkZWZzNCI+ICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZSAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMzAwLjUgOiAxIiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiICAgICAgIGlua3NjYXBlOnZwX3o9IjYwMSA6IDMwMC41IDogMSIgICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMwMC41IDogMjAwLjMzMzMzIDogMSIgICAgICAgaWQ9InBlcnNwZWN0aXZlMzM4MCIgLz4gICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlICAgICAgIGlkPSJwZXJzcGVjdGl2ZTM5OTAiICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzUgOiAyNTAgOiAxIiAgICAgICBpbmtzY2FwZTp2cF96PSI3NTAgOiAzNzUgOiAxIiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAzNzUgOiAxIiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPiAgPC9kZWZzPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMS4xNTcyOTMiICAgICBpbmtzY2FwZTpjeD0iMjYwLjc0MzE0IiAgICAgaW5rc2NhcGU6Y3k9IjE2OS4yMzU3NyIgICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIgICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgICAgIHdpZHRoPSI2MDFweCIgICAgIGhlaWdodD0iNjAxcHgiICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IiAgICAgc2hvd2dyaWQ9ImZhbHNlIiAgICAgZml0LW1hcmdpbi10b3A9IjAiICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIgICAgIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiIC8+ICA8bWV0YWRhdGEgICAgIGlkPSJtZXRhZGF0YTciPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8ZGM6dGl0bGUgLz4gICAgICA8L2NjOldvcms+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+ICA8ZyAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiAgICAgaWQ9ImxheWVyMSIgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NTQuNjkzNywzNzMyLjQ4ODgpIj4gICAgPHJlY3QgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjg3MzU0NDE7bWFya2VyOm5vbmU7dmlzaWJpbGl0eTp2aXNpYmxlO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGUiICAgICAgIGlkPSJyZWN0MzY1MyIgICAgICAgd2lkdGg9IjAiICAgICAgIGhlaWdodD0iMjcuMjAyMDcyIiAgICAgICB4PSI1NzguNzM4MzQiICAgICAgIHk9IjI5OC4xNjg0IiAgICAgICByeD0iMjQ5LjQ4MTk5IiAgICAgICByeT0iMjcuMjAyMDcyIiAvPiAgICA8cGF0aCAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzdHlsZT0iZmlsbDojMGM0NzlkO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAgICAgICBkPSJtIC0yNTU0LjY5MzcsLTM3MzIuNDg4OCA1MDAsMCAwLDUwMCAtNTAwLDAgMCwtNTAwIHoiICAgICAgIGlkPSJwYXRoMTEiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI1NTQuNjkzNywtMzI2My43Mzg4IGMgMCwxNy4yNTg5IDEzLjk5MTMsMzEuMjUgMzEuMjUsMzEuMjUgbCA0MzcuNSwwIGMgMTcuMjU4NywwIDMxLjI1LC0xMy45OTExIDMxLjI1LC0zMS4yNSBsIDAsLTQzNy41IGMgMCwtMTcuMjU4OSAtMTMuOTkxMywtMzEuMjUgLTMxLjI1LC0zMS4yNSBsIC00MzcuNSwwIGMgLTE3LjI1ODcsMCAtMzEuMjUsMTMuOTkxMSAtMzEuMjUsMzEuMjUgeiIgICAgICAgaWQ9InBhdGgxMyIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3MiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJmaWxsOiMwYzQ3OWQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTIwNzAuMzE4NywtMzcwMS4yMzg4IGMgMCwtOC42Mjg4IC02Ljk5NTEsLTE1LjYyNSAtMTUuNjI1LC0xNS42MjUgbCAtNDM3LjUsMCBjIC04LjYyOTksMCAtMTUuNjI1LDYuOTk2MiAtMTUuNjI1LDE1LjYyNSBsIDAsNDM3LjUgYyAwLDguNjI4OCA2Ljk5NTEsMTUuNjI1IDE1LjYyNSwxNS42MjUgbCA0MzcuNSwwIGMgOC42Mjk5LDAgMTUuNjI1LC02Ljk5NjIgMTUuNjI1LC0xNS42MjUgeiIgICAgICAgaWQ9InBhdGgxNSIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzc3Nzc3Nzc3MiIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI0NjAuOTQ0LC0zNjM4LjczODggMzEyLjUsMCAwLDMxMi41IC0zMTIuNSwwIDAsLTMxMi41IHoiICAgICAgIGlkPSJwYXRoMTciIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTI0MDYuNzc3MiwtMzQ4Mi40MzgzIGMgLTIuMjIyNSwyNi41OTE3IC0xNi40MDA5LDUwLjczMjggLTM4LjU0MTEsNjUuNjI1NiAxNC41NCwzLjkzMDEgMzAuMDM4LDIuMDYzOCA0My4yMjg2LC01LjIwNzkgbCAwLDM4LjAyMDcgLTQ0LjI3MDUsMCAwLDIzLjk1ODEgMjgwLjIwODcsMCAwLjUyMDMsMCAwLC0yMy45NTgxIC0wLjUyMDMsMCAtMTEuOTc5LDAgMCwtMTE5LjI3MTEgMjAuODMyNiwwIC05OC4xNzcxLC0xMDEuNjY1MiAtOTguMTc2LDEwMS42NjUyIDIwLjgzMjYsMCAwLDExOS4yNzExIC01My42NDY1LDAgMCwtMzguMDIwNyBjIDE0LjE2MTgsNy4xNjY5IDMwLjQyNjEsOS4wMTQ2IDQ1LjgzMzcsNS4yMDc5IC0yMy4zNzUsLTEzLjc2NzIgLTM4LjEwNDUsLTM4LjUxNDYgLTM5LjA2MjYsLTY1LjYyNTYgOS4wNDIzLDcuODQ3MSAyMC4zNTc2LDEyLjU5MiAzMi4yOTI1LDEzLjU0MjMgLTI1LjkxODIsLTI0LjM5MzYgLTQyLjE4NzksLTU3LjMwMzQgLTQ1LjgzNDgsLTkyLjcwOCAtNC40NzM2LDM0Ljk0NDkgLTIwLjE5NjUsNjcuNDg1NCAtNDQuNzkxOCw5Mi43MDggMTEuNTUzNSwtMS4yMjgxIDIyLjQ1NTUsLTUuOTUzMiAzMS4yNTA3LC0xMy41NDIzIHoiICAgICAgIGlkPSJwYXRoMTkiIC8+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiICAgICAgIGQ9Im0gLTIyNzYuMDQ4NSwtMzQ0NS45Nzg3IDAsNjEuOTc4OCA0MS42Njc1LDAgMCwtNjEuOTc4OCAtNDEuNjY3NSwwIHoiICAgICAgIGlkPSJwYXRoMjEiIC8+ICA8L2c+PC9zdmc+',
            status: 'secondaryonly',
            defaultAction: 'Tile default with name, icon action (information)',
            secondaryActionIndicator: 'information',
            secondaryAction: 'Tile with name and icon secondary action (information)'
        }, {
            name: 'Half tile with name only and secondary action',
            status: 'secondaryonly',
            defaultAction: 'Tile with name only default action (delete)',
            secondaryActionIndicator: 'delete',
            secondaryAction: 'Tile with name only secondary action (delete)'
        }];

        // Example function to test the action on icon
        self.actionTileList = function(text) {
            self.tileValueList = text;
        };

        self.actionTileList1 = function(text) {
            self.tileValueList1 = text;
        };

        self.actionHalfTileList = function(text) {
            self.halfTileValueList1 = text;
        };

        self.actionOnTileWithExtension = function(text) {
            self.defaultActionOnTile = text;
        };

        self.clickMe = function(){
            self.amIClicked = 'Button clicked';
        };

        self.actionHalfTileSecondaryAction = function(text) {
            self.halfTileValueWithSecondaryAction = text;
        };
    };
});
