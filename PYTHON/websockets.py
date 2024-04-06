### SERVER SIDE ###

# fastapi_websocket_server.py
import asyncio
import time
from fastapi import FastAPI, WebSocket
import uvicorn

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    '''
    This function establishes a WebSocket connection with the client. Once the connection is accepted, it enters an infinite loop
    where it continuously receives a message from the client, and sends back the same message prefixed with "Message text was: ".
    This function essentially acts as an echo server.
    '''
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")



@app.websocket("/timestamp")
async def websocket_endpoint(websocket: WebSocket):
    '''
    This function establishes a WebSocket connection with the client. Once the connection is accepted, it enters an infinite loop
    where it continuously sends the current server time to the client every second. This function acts as a time server.
    '''
    await websocket.accept()
    while True:
        data = f"Server time: {time.time()}"
        await websocket.send_text(data)
        await asyncio.sleep(1)


uvicorn.run(app, host="localhost", port=8002)




# non-fastapi_websocket_server
# websocket_server.py
import asyncio
import websockets

async def echo(websocket, path):
    async for message in websocket:
        await websocket.send(message)
        print(f"Received: {message}")


print("Server started")
start_server = websockets.serve(echo, "localhost", 8765)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()



### CLIENT SIDE ###
# websocket_client.py
import asyncio
import websockets

async def hello():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        await websocket.send("client to server message")
        response = await websocket.recv()
        print(response)


async def main():
    uri = "ws://localhost:8002/ws"
    async with websockets.connect(uri) as websocket:
        await websocket.send("client to server message")
        response = await websocket.recv()
        print(response)



async def timeStampWSone():
    '''
    websocket example to send a message to the server and receive a response
    '''
    uri = "ws://localhost:8002/timestamp"
    async with websockets.connect(uri) as websocket:
        await websocket.send("client to server message")
        response = await websocket.recv()
        print(response)


async def timeStampWS():
    '''
    websocket example to continuously receive messages from the server
    '''
    uri = "ws://localhost:8002/timestamp"
    async with websockets.connect(uri) as websocket:
        while True:
            response = await websocket.recv()
            print("\r"+ response, end="")



asyncio.get_event_loop().run_until_complete(hello()) # old more controlled way
asyncio.run(main()) # new good enough
asyncio.run(timeStampWS())
