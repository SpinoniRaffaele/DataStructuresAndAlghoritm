# define some Makefile variables for the compiler and compiler flags
# to use Makefile variables later in the Makefile: $()
#
#  -g    adds debugging information to the executable file
#  -Wall turns on most, but not all, compiler warnings
#
# for C++ define  CC = g++
CC = gcc
CFLAGS  = -g -Wall
RM = rm

default: all
# To create the executable file main we need all the object files
all:  main.o
	$(CC) $(CFLAGS) -o main *.o

# add to the main.o the dependencies of any other module is added
main.o: clean Heap.o LinkedList.o Trie.o Stack.o Queue.o
	$(CC) $(CFLAGS) -c main.c


#### single modules here
Trie.o:
	$(CC) $(CFLAGS) -c trie/Trie.c
Heap.o: 
	$(CC) $(CFLAGS) -c heap/Heap.c

LinkedList.o:
	$(CC) $(CFLAGS) -c linked_list/LinkedList.c

Stack.o:
	$(CC) $(CFLAGS) -c stack/Stack.c

Queue.o:
	$(CC) $(CFLAGS) -c queue/Queue.c

#cleanup script
clean:
	del /S *.o *.exe